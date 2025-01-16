/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // Extra small devices (phones, 600px and down)
      xs: { max: "600px" },

      // Small devices (portrait tablets and large phones, 600px and up)
      sm: "600px",

      // Medium devices (landscape tablets, 768px and up)
      md: "768px",

      // Large devices (laptops/desktops, 992px and up)
      lg: "992px",

      // Extra large devices (large laptops and desktops, 1200px and up)
      xl: "1200px",

      "2xl": "1440px",
    },
    container: {
      center: true, // Centers the container
      padding: "1rem",
      screens: {
        sm: "600px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra-large devices
        "2xl": "1440px", // Wider extra-large screens
      },
      // Custom max-width for each breakpoint
      maxWidth: {
        sm: "100%", // Full width for small devices
        md: "720px", // Optimized width for medium devices
        lg: "960px", // Optimized width for large devices
        xl: "1140px", // Extra-large screen width
        "2xl": "1320px", // Maximum width for 2xl screens
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      figtree: ["Figtree", "serif"],
      roboto: ["Roboto", "serif"],
    },

    extend: {
      colors: {
        primary: {
          light: "#DFF8EB", // Light green (backgrounds)
          DEFAULT: "#00B76E", // Main green (buttons, headings)
          dark: "#007848", // Dark green (hover states, accents)
        },
        white: "#FFFFFF", // Background and text
        light: "#F6F6F6", // Light gray (section backgrounds)
        grey: "#D9D9D9", // Gray (borders, cards)
        dark: "#333333", // Dark gray (text)
        yellow: "#FFD700", // Yellow (ratings or small details)
      },
    },
  },

  plugins: [],
};
