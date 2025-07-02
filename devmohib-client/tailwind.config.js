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
        borderPri: 'var(--border-primary-color)', // gray
        textColor: 'var(--text-color)', // black
        textWhite: 'var(--text-color)', // black
      }
    },
  },
  plugins: [],
};
