module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./src/**/*.{js,ts,jsx,tsx}','./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", 
  theme: {
    extend: {
    },
  },
  plugins: [],
}