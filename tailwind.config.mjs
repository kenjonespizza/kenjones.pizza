/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");
const lineClamp = require("@tailwindcss/line-clamp");
const forms = require("@tailwindcss/forms");
const stroke = require("@designbycode/tailwindcss-text-stroke");
const clipPath = require("tailwind-clip-path");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        fillBarH: "fillBarH 0.5s ease-in-out 0.5s 1 forwards",
        fillBarV: "fillBarV 0.5s ease-in-out 1.25s 1 forwards",
      },
      borderWidth: {
        10: "10px",
        20: "20px",
      },
      boxShadow: {
        "big-box-icecream":
          "0px -2px 5px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25), 0px 0px 80px rgba(253, 168, 243, 0.4);",
        "big-box-cheese":
          "0px -2px 5px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25), 0px 0px 80px rgba(255, 202, 40, 0.4);",
        "big-box-berry":
          "0px -2px 5px rgba(0, 0, 0, 0.25), 0px 2px 5px rgba(0, 0, 0, 0.25), 0px 0px 80px #3BD4E9;",
      },
      clipPath: {
        angled: "polygon(0 40px, 100% 0%, 100% 100%, 0 100%)",
      },
      colors: {
        gray: {
          50: "#E0E5F0",
          100: "#C4CFE3",
          200: "#869BC5",
          300: "#4F6CA6",
          400: "#33466B",
          500: "#161E2E",
          DEFAULT: "#161E2E",
          600: "#121926",
          700: "#0D121C",
          800: "#080B11",
          900: "#05070A",
        },
        white: "#F4F5F7",
        "true-white": "#ffffff",
        sauce: {
          50: "#FEEBEC",
          100: "#FDD8D9",
          200: "#FCB1B3",
          300: "#FA898D",
          400: "#F9676C",
          500: "#F73F45",
          DEFAULT: "#F73F45",
          600: "#F00A12",
          700: "#B0070D",
          800: "#760509",
          900: "#3B0204",
        },
        cheese: {
          50: "#FFFAEB",
          100: "#FFF5D6",
          200: "#FFE9A8",
          300: "#FFDF80",
          400: "#FFD452",
          500: "#FFCA28",
          DEFAULT: "#FFCA28",
          600: "#EBB000",
          700: "#B38600",
          800: "#755800",
          900: "#3D2E00",
        },
        berry: {
          50: "#EDFBFD",
          100: "#D6F6FA",
          200: "#B1EEF6",
          300: "#88E5F2",
          400: "#63DDED",
          500: "#3BD4E9",
          DEFAULT: "#3BD4E9",
          600: "#18BDD3",
          700: "#128C9C",
          800: "#0C5F69",
          900: "#062D32",
        },
        icecream: {
          50: "#FFF5FE",
          100: "#FFF0FD",
          200: "#FEDCFA",
          300: "#FECDF8",
          400: "#FDB9F5",
          500: "#FDA8F3",
          DEFAULT: "#FDA8F3",
          600: "#FB56E8",
          700: "#F906DD",
          800: "#A50492",
          900: "#55024B",
        },
      },
      fontFamily: {
        sans: ["'GreycliffCF'", ...defaultTheme.fontFamily.sans],
        serif: ["'Bitter'", ...defaultTheme.fontFamily.serif],
        code: ["'Fira Code'", ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        fillBarH: {
          "0%%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fillBarV: {
          "0%%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      skew: {
        24: "24deg",
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
        120: "30rem",
      },
      // typography: (theme) => ({
      // 	DEFAULT: {
      // 		css: {
      // 			'5xl': {
      // 				fontSize: '3.5rem'
      // 			}
      // 		}
      // 	}
      // })
    },
  },
  plugins: [forms, typography, lineClamp, stroke, clipPath],
};
