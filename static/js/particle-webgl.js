(function(){
  // WebGL particle effect (fixed logical size + responsive scaling + performant input)
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  // Prefer high performance GPU and disable unnecessary features
  const gl = canvas.getContext("webgl", {
    powerPreference: 'high-performance', antialias: false, preserveDrawingBuffer: false,
  });
  if (!gl) return;

  const ua = navigator.userAgent || '';
  const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
  const isSmall = typeof window !== 'undefined' ? window.innerWidth < 1000 : false;

  // Fixed logical canvas + DPR backbuffer scaling
  const LOGICAL_SIZE = 1000;
  const DPR = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
  function resizeViewport(){ canvas.width = Math.floor(LOGICAL_SIZE * DPR); canvas.height = Math.floor(LOGICAL_SIZE * DPR); gl.viewport(0,0,canvas.width,canvas.height); }
  resizeViewport();

  // ParticleSlider-like parameters
  const config = {
    particleCount: 6000,
    textArray: ["AEC Informatics"],        // single phrase only
    ptlGap: (isMobile || isSmall) ? 3 : 2,  // raster sampling step
    ptlSize: (isMobile || isSmall) ? 3 : 1, // point size
    restless: true,                         // subtle idle motion
    color: '#000000',                       // monochrome black per design
    mouseRadius: 0.5,
    forceMultiplier: 0.001,
    // Slightly faster return-to-target for snappier reset
    returnSpeed: isMobile ? 0.012 : 0.002,
    velocityDamping: isMobile ? 0.86 : 0.96,
  };

  let textCoordinates = [];
  const textCoordinateCache = {};
  const mouse = { x: -500, y: -500, radius: config.mouseRadius };
  const particles = Array.from({ length: config.particleCount }, () => ({ x:0, y:0, baseX:0, baseY:0, vx:0, vy:0, ph: Math.random()*6.28318 }));

  // Shaders: color uniform + DPR-aware point size
  const vertexShaderSource = `
  attribute vec2 a_position;
  void main(){
    gl_PointSize = ${config.ptlSize.toFixed(1)} * ${DPR.toFixed(1)};
    gl_Position = vec4(a_position, 0.0, 1.0);
  }`;
  const fragmentShaderSource = `
  precision mediump float; uniform vec3 u_color; void main(){ gl_FragColor = vec4(u_color, 1.0); }`;

  function createShader(type, src){ const sh = gl.createShader(type); gl.shaderSource(sh, src); gl.compileShader(sh); if(!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw gl.getShaderInfoLog(sh); return sh; }
  function createProgram(vs, fs){ const p = gl.createProgram(); gl.attachShader(p, vs); gl.attachShader(p, fs); gl.linkProgram(p); if(!gl.getProgramParameter(p, gl.LINK_STATUS)) throw gl.getProgramInfoLog(p); return p; }

  const vs = createShader(gl.VERTEX_SHADER, vertexShaderSource);
  const fs = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
  const program = createProgram(vs, fs);
  gl.useProgram(program);
  const uColorLoc = gl.getUniformLocation(program, 'u_color');
  function hexToRgb01(hex){ const m = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex)||[]; const r=parseInt(m[1]||'00',16)/255, g=parseInt(m[2]||'00',16)/255, b=parseInt(m[3]||'00',16)/255; return [r,g,b]; }
  gl.uniform3fv(uColorLoc, new Float32Array(hexToRgb01(config.color)));

  const positionLocation = gl.getAttribLocation(program, 'a_position');
  const positionBuffer = gl.createBuffer();
  const positions = new Float32Array(config.particleCount * 2);

  gl.clearColor(0,0,0,0); gl.disable(gl.DEPTH_TEST); gl.disable(gl.BLEND);
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions.byteLength, gl.DYNAMIC_DRAW);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  function getTextCoordinates(text){
    if(textCoordinateCache[text]) return textCoordinateCache[text];
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.canvas.width = LOGICAL_SIZE; ctx.canvas.height = LOGICAL_SIZE;
    const fontSize = LOGICAL_SIZE/10; ctx.font = `900 ${fontSize}px Arial`; ctx.fillStyle = 'white'; ctx.textAlign='center'; ctx.textBaseline='middle';
    const lines = text.split('\n'); const lineHeight = fontSize*1.2; const startY = LOGICAL_SIZE/2 - (lineHeight*lines.length)/2 + fontSize/2; lines.forEach((line,i)=>ctx.fillText(line, LOGICAL_SIZE/2, startY+i*lineHeight));
    const data = ctx.getImageData(0,0,LOGICAL_SIZE,LOGICAL_SIZE).data; const coords=[];
    const step = Math.max(2, config.ptlGap|0);
    for(let y=0; y<LOGICAL_SIZE; y+=step){ for(let x=0; x<LOGICAL_SIZE; x+=step){ const i=(y*LOGICAL_SIZE+x)*4; if(data[i+3]>128) coords.push({x:(x/LOGICAL_SIZE)*2-1, y:(y/LOGICAL_SIZE)*-2+1}); }}
    return (textCoordinateCache[text]=coords);
  }

  function assignToCoords(coords){ for(let i=0;i<particles.length;i++){ const pick = coords[(Math.random()*coords.length)|0] || {x:0,y:0}; const p=particles[i]; p.baseX=pick.x; p.baseY=pick.y; p.vx=0; p.vy=0; } }
  function createParticles(){ const coords = getTextCoordinates(config.textArray[0]); textCoordinates=coords; for(let i=0;i<particles.length;i++){ const pick = coords[(Math.random()*coords.length)|0] || {x:0,y:0}; const p=particles[i]; p.x=p.baseX=pick.x; p.y=p.baseY=pick.y; p.vx=0; p.vy=0; } }

  // Dynamics
  let lastTime = performance.now(); let frameSkip=0;
  function updateParticles(dt){
    const radius2 = mouse.radius*mouse.radius; const t = lastTime*0.001;
    for(let i=0;i<particles.length;i++){
      const p=particles[i];
      // Subtle idle motion
      let offX=0, offY=0; if(config.restless){ const amp=0.002; offX = Math.sin(p.ph + t)*amp; offY = Math.cos(p.ph*1.3 + t)*amp; }
      // Mouse disturbance
      if(!isMobile && mouse.x>-2){ const dx = mouse.x - p.x, dy = mouse.y - p.y; const d2 = dx*dx+dy*dy; if(d2<radius2 && d2>1e-8){ const invD = 1/Math.sqrt(d2); const force = ((mouse.radius - Math.sqrt(d2))/mouse.radius) * config.forceMultiplier * dt; p.vx -= dx*invD*force; p.vy -= dy*invD*force; }}
      // Return to (base + idle offset)
      p.vx += ((p.baseX+offX) - p.x) * (config.returnSpeed*dt);
      p.vy += ((p.baseY+offY) - p.y) * (config.returnSpeed*dt);
      p.x += p.vx; p.y += p.vy; const damping = Math.pow(config.velocityDamping, dt); p.vx*=damping; p.vy*=damping;
      positions[i*2]=p.x; positions[i*2+1]=p.y;
    }
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, positions);
  }

  function draw(){ gl.clear(gl.COLOR_BUFFER_BIT); gl.drawArrays(gl.POINTS, 0, config.particleCount); }
  function loop(now){ const dtMs = now-lastTime; lastTime=now; const dt = Math.max(0.25, Math.min(4, dtMs/16.6667)); if(isMobile){ if((frameSkip++%2)===0){ updateParticles(dt*2); draw(); } } else { updateParticles(dt); draw(); } requestAnimationFrame(loop); }

  function resetParticles(){ const coords = getTextCoordinates(config.textArray[0]); assignToCoords(coords); }

  function pointerToGL(clientX, clientY){ const r=canvas.getBoundingClientRect(); const x=((clientX-r.left)/r.width)*2-1; const y=-((clientY-r.top)/r.height)*2+1; return {x,y}; }
  canvas.addEventListener('mousemove', e=>{ const p=pointerToGL(e.clientX,e.clientY); mouse.x=p.x; mouse.y=p.y; });
  canvas.addEventListener('mouseleave', ()=> (mouse.x=mouse.y=-500));
  canvas.addEventListener('click', resetParticles, {passive:true});

  window.addEventListener('resize', resizeViewport);
  createParticles(); requestAnimationFrame(t=>{ lastTime=t; requestAnimationFrame(loop); });
  // Single text: no auto switching or auto reset
})(); 