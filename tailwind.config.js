/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{html,htm}',
    './content/**/*.{md,html}',
    './assets/**/*.{js,ts}',
    './themes/**/layouts/**/*.{html,htm}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};


