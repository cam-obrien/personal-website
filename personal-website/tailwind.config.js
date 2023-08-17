/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  daisyui: {
    themes: ["synthwave", "corporate"],
    base:true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: "",
    logs: true,
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
