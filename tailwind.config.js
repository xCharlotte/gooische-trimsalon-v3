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
        primary: "#3490dc",
        secondary: "#ffed4a",
        tertiary: "#e3342f",
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
