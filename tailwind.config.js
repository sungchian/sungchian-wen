/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.vue", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    sticky: false,
  },
};
