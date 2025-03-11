/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px", // Custom breakpoint for screens >= 400px
      sm: "640px", // Default sm breakpoint
      md: "768px", // Default md breakpoint
      lg: "1024px", // Default lg breakpoint
      xl: "1280px", // Default xl breakpoint
      "2xl": "1536px", // Default 2xl breakpoint
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ed1c24",
        },
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
