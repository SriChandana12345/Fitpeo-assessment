/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    // "./src/app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./src/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        n1: "var(--n1)",
      }
    },
  },
  plugins: [],
}

