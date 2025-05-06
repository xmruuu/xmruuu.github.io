// WebGL 粒子特效（固定邏輯尺寸 + 等比例縮放 + 高效能觸控）
const canvas = document.getElementById("particleCanvas");
const gl = canvas.getContext("webgl");

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// 固定邏輯畫布大小（正方形）
const LOGICAL_SIZE = 1000;
canvas.width = LOGICAL_SIZE;
canvas.height = LOGICAL_SIZE;

// WebGL viewport 同步設定
function resizeViewport() {
  gl.viewport(0, 0, LOGICAL_SIZE, LOGICAL_SIZE);
}
resizeViewport();

const config = {
  particleCount: 6000,
  textArray: isMobile ? ["Bauinformatik", "AEC+Infomatics"] : ["Bauinformatik", "AEC+Infomatics"],
  mouseRadius: 0.5,
  particleSize:  1.0,
  forceMultiplier: 0.001,
  returnSpeed: isMobile ? 0.01 : 0.001,
  velocityDamping: isMobile ? 0.86 : 0.96,
  textChangeInterval: 5000
};

let currentTextIndex = 0;
let textCoordinates = [];
const textCoordinateCache = {};
const mouse = { x: -500, y: -500, radius: config.mouseRadius };
const particles = Array.from({ length: config.particleCount }, () => ({ x: 0, y: 0, baseX: 0, baseY: 0, vx: 0, vy: 0 }));

const vertexShaderSource = `
attribute vec2 a_position;
void main() {
  gl_PointSize = ${config.particleSize.toFixed(1)};
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentShaderSource = `
precision mediump float;
void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}`;

function createShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(shader);
  return shader;
}

function createProgram(vShader, fShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vShader);
  gl.attachShader(program, fShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw gl.getProgramInfoLog(program);
  return program;
}

const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(vertexShader, fragmentShader);

const positionLocation = gl.getAttribLocation(program, "a_position");
const positionBuffer = gl.createBuffer();
const positions = new Float32Array(config.particleCount * 2);

gl.clearColor(1, 1, 1, 1);

function getTextCoordinates(text) {
  if (textCoordinateCache[text]) return textCoordinateCache[text];

  const ctx = document.createElement("canvas").getContext("2d");
  ctx.canvas.width = LOGICAL_SIZE;
  ctx.canvas.height = LOGICAL_SIZE;
  const fontSize = LOGICAL_SIZE / 10;
  ctx.font = `900 ${fontSize}px Arial`;
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const lines = text.split("\n");
  const lineHeight = fontSize * 1.2;
  const startY = LOGICAL_SIZE / 2 - (lineHeight * lines.length) / 2 + fontSize / 2;
  lines.forEach((line, i) => ctx.fillText(line, LOGICAL_SIZE / 2, startY + i * lineHeight));

  const imageData = ctx.getImageData(0, 0, LOGICAL_SIZE, LOGICAL_SIZE).data;
  const coords = [];
  for (let y = 0; y < LOGICAL_SIZE; y += 2) {
    for (let x = 0; x < LOGICAL_SIZE; x += 2) {
      const i = (y * LOGICAL_SIZE + x) * 4;
      if (imageData[i + 3] > 128)
        coords.push({ x: (x / LOGICAL_SIZE) * 2 - 1, y: (y / LOGICAL_SIZE) * -2 + 1 });
    }
  }
  return (textCoordinateCache[text] = coords);
}

function createParticles() {
  textCoordinates = getTextCoordinates(config.textArray[currentTextIndex]);
  particles.forEach((p) => {
    const { x, y } = textCoordinates[Math.floor(Math.random() * textCoordinates.length)] || { x: 0, y: 0 };
    p.x = p.baseX = x;
    p.y = p.baseY = y;
  });
}

function updateParticles() {
    particles.forEach((p, i) => {
      if (!isMobile) { 
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = ((mouse.radius - dist) / mouse.radius) * config.forceMultiplier;
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }
      }
  
      p.vx += (p.baseX - p.x) * config.returnSpeed;
      p.vy += (p.baseY - p.y) * config.returnSpeed;
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= config.velocityDamping;
      p.vy *= config.velocityDamping;
      positions[i * 2] = p.x;
      positions[i * 2 + 1] = p.y;
    });
  
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);
  }
  
function drawParticles() {
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionLocation);
  gl.useProgram(program);
  gl.drawArrays(gl.POINTS, 0, config.particleCount);
}

function animate() {
  if (isMobile) {
    setTimeout(() => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    }, 30);
  } else {
    updateParticles();
    drawParticles();
    requestAnimationFrame(animate);
  }
}

function changeText() {
  currentTextIndex = (currentTextIndex + 1) % config.textArray.length;
  const coords = getTextCoordinates(config.textArray[currentTextIndex]);
  if (coords.length === 0) return;
  textCoordinates = coords;
  particles.forEach((p) => {
    const { x, y } = coords[Math.floor(Math.random() * coords.length)] || { x: 0, y: 0 };
    p.baseX = x;
    p.baseY = y;
    p.vx = p.vy = 0;
  });
}

// 事件處理（以邏輯座標為基準）
function pointerToGLCoords(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const x = ((clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((clientY - rect.top) / rect.height) * 2 + 1;
  return { x, y };
}

canvas.addEventListener("mousemove", (e) => {
  Object.assign(mouse, pointerToGLCoords(e.clientX, e.clientY));
});

canvas.addEventListener("mouseleave", () => (mouse.x = mouse.y = -500));
canvas.addEventListener("click", changeText);

if (isMobile) {
    canvas.addEventListener("touchstart", (e) => {
      e.preventDefault(); // 防止滑動或雙擊放大干擾
    }, { passive: false });
  
    canvas.addEventListener("touchend", () => {
      changeText();      // ✅ 在手指放開時切換文字
      mouse.x = -500;    // ⛔️ 保險防止擾動發生
      mouse.y = -500;
    });
  }

window.addEventListener("resize", () => {
  resizeViewport();
});

createParticles();
animate();
setInterval(changeText, config.textChangeInterval); 