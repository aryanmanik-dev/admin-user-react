/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#05386b",
        secondary: "#379683",
        success: "#28a745",
        danger: "#dc3545",
        warning: "#ffc107",
        info: "#17a2b8",
        light: "#f8f9fa",
        dark: "#343a40",
      },
    },
  },
  plugins: [],
};
