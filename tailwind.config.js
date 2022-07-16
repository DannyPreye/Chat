/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        "coolBlue": "#386FA4",
        "white": "#FFFFFF",
        "cyan": "#91E5F6",
        "red": "#FE0000",
        "dark": "#000000",
        "text-gray": "#8A8A8A",
        "gray": "#FAFAFA"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
