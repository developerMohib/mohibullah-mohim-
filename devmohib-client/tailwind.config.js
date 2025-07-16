/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        priColor: 'var(--primary-color)', // green
        secColor: 'var(--secondary-color)', // rose
        terColor: 'var(--ternary-color)', // blue
        bgPriColor: 'var(--bg-primary-color)', // black
        bgSecColor: 'var(--bg-secondary-color)', // black
        borderPri: 'var(--border-primary-color)', // gray
        textColor: 'var(--text-color)', // black
        textWhite: 'var(--text-fixed-white)', // white
        textBlack: 'var(--text-fixed-black)', // black
        placeholder :'var(--placeholder-color)'
      }
    },
  },
  plugins: [],
};
