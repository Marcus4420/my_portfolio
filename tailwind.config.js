/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  daisyui: {
    themes: [
      "dim",
    ],
  },
  plugins: [require("daisyui"), require('tailwindcss-animated')],
}

