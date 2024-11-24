/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "text-blue": "#323a56",
        "span-blue": "#1d72d2",
        "text-gray": "#8a90a5",
        "text-green": "#70c63b",
        "white-color": "#fff",
      },
      fontFamily: {
        Inter: ['"Inter", sans-serif'],
      },
    },
  },
  plugins: [],
};
