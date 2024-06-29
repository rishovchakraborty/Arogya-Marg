/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightbg:"	#023020",
        bgcolor:'#228B22',
        lightbg2:"#E4D00A",
        bluebtn:"#4c0c01",
        bgall:"#F2F9FF",
        bgcircle:"#228b22",
        bginput:"#a1ec8a",
      }
    },
  },
  plugins: [],
}