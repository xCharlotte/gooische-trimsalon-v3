import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.tsx",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3A53A5",
          dark: "#2D437E",
          light: "#5B6FB8",
        },
        secondary: {
          DEFAULT: "#EF476F",
          dark: "#D63B5E",
          light: "#F76B87",
        },
        tertiary: "#56CCF2",
        accent: "#FFD166",
        neutral: "#F2F5F9",
        dark: "#2C3E50",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        // sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "login-bg": "url('/images/login-bg.webp')",
        "hero-bg": "url('/images/home-banner.jpg')",
      },
    },
  },

  plugins: [forms],
};
