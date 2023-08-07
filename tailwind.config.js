/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#1a1a1a",
          800: "#1f1f1f",
          700: "#2a2a2a",
          600: "#3a3a3a",
          500: "#4d4d4d",
          200: "#f3f3f3",
          100: "#ffffff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      maxWidth: {
        "7xl": "95rem",
      },
      animation: {
        "bounce-slow": "bounce 1.2s infinite;",
        "bounce-fast": "bounce 0.9s infinite;",
      },
    },
  },

  plugins: [],
};
