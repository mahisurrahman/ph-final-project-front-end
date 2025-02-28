/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'font-inter': "'Inter', sans-serif",
      'font-cinzel': "'Cinzel', serif",
      'font-raleway': "'Raleway', sans-serif",
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

