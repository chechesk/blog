const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'dark',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}