/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0055A5",
          light: "#2F7FDB",
          dark: "#003A73"
        },
        accent: "#C0C8D6"
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"]
      },
      boxShadow: {
        smooth: "0 20px 45px -20px rgba(0, 85, 165, 0.35)"
      }
    },
  },
  plugins: [],
};

export default config;
