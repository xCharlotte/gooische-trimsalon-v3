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
        primary: "#3A53A5",
        "primary-light": "#5F74C7",
        "primary-dark": "#2E4288",
        secondary: "#9055A2",
        "secondary-light": "#B98CCB",
        "secondary-dark": "#6B3F7C",
        tertiary: "#F4B400",
        "tertiary-light": "#FFE599",
        "tertiary-dark": "#C28F00",
        "surface-light": "#FFFFFF",
        "surface-muted": "#E5E7EB",
        "surface-accent": "#EEF0FA",
        "surface-warm": "#FDF5F7",
        // primary: {
        //   DEFAULT: "#3A53A5", // logo kleur
        //   dark: "#2c3e90",
        //   light: "#6f81d6",
        //   tint: "#eef0fb", // zachte bg-tint
        // },
        // secondary: {
        //   DEFAULT: "#F9A826", // warm geel/oranje als accentkleur
        //   dark: "#d98b1c",
        //   light: "#ffe4b3",
        // },
        // tertiary: {
        //   DEFAULT: "#94C9A9", // zachte mintgroen voor rust
        //   dark: "#6aa789",
        //   light: "#dff4e8",
        // },
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
    },
  },

  plugins: [forms],
};
