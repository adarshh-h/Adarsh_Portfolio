/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 2s ease infinite",
        shimmer: "shimmer 2s linear infinite"
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        shimmer: {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        }
      },
      fontFamily: {
        cookie: ["Cookie", "serif"],
        inter: ["Inter", "serif"],
        mulish: ["Mulish", "serif"]
      }
    },
  },
  plugins: [],
};