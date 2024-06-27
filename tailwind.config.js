/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightbg:"#648AFF",
        bgcolor:'#6C92FF',
        lightbg2:"#7294FF",
        bluebtn:"#0038A5",
        bgall:"#F2F9FF",
        bgcircle:"#0038A5",
        bginput:"#d9e7fd",
      }
    },
  },
  plugins: [],
}