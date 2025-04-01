/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: ["Russo One", "sans-serif"],
        custom2:["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
}

