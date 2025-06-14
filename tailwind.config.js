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
        primary: "#00B9AE",
        "primary-light": "#4DCEC6",
        "primary-dark": "#00827A",
        secondary: "#FF8A5B",
        "secondary-light": "#FFA17C",
        "secondary-dark": "#CC6E49",
        tertiary: "#F4B400",
        "tertiary-light": "#F6C333",
        "tertiary-dark": "#C39000",
        brown: {
          default: "#EDE4E3",
        },
        "heavy-black": "#1C1D1C", // Used for sidebar admin panel
        tint: {
          100: "#F5F7F6",
          200: "#EAF8F7",
          300: "#F4ECE6",
          400: "#EDE7DE",
          500: "#0B3D3C",
          600: "#1C2E2D",
          700: "#FF6B6B",
        },
        neutral: {
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#E5E7EB",
          400: "#D1D5DB",
          500: "#9CA3AF",
          600: "#6B7280",
          700: "#4B5563",
          800: "#374151",
          900: "#1F2937",
        },
      },

      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.25rem", fontWeight: "400" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.5rem", fontWeight: "400" }], // 14px
        base: ["1rem", { lineHeight: "1.75rem", fontWeight: "400" }], // 16px
        md: ["1.125rem", { lineHeight: "1.75rem", fontWeight: "500" }], // 18px
        lg: ["1.25rem", { lineHeight: "2rem", fontWeight: "500" }], // 20px
        xl: ["1.5rem", { lineHeight: "2.25rem", fontWeight: "600" }], // 24px
        "2xl": ["1.875rem", { lineHeight: "2.5rem", fontWeight: "600" }], // 30px
        "3xl": ["2.25rem", { lineHeight: "2.75rem", fontWeight: "700" }], // 36px
        "4xl": ["3rem", { lineHeight: "1", fontWeight: "700" }], // 48px
        "5xl": ["3.75rem", { lineHeight: "1", fontWeight: "700" }], // 60px
      },

      backgroundImage: {
        "login-bg": "url('/images/login-bg.webp')",
        "hero-bg": "url('/images/home-banner.jpg')",
      },
      animation: {
        slideInRight: "slide-in-right 0.3s ease-out forwards",
      },
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },

  plugins: [forms],
};
