/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx,vue}"],

  theme: {
    extend: {
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
