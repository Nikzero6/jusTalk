/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        "bounce-200": "bounce 0.8s infinite 200ms",
        "bounce-400": "bounce 0.8s infinite 400ms",
        "bounce-600": "bounce 0.8s infinite 600ms"
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2560px"
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"]
    }
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("tailwind-scrollbar-hide"),
    // require("@tailwindcss/aspect-ratio"),
    [
      "@babel/plugin-transform-spread",
      {
        loose: true
      }
    ]
  ]
};

