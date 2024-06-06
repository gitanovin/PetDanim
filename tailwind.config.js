const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in __theme_color.scss
function customColors(cssVar) {
  return ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${cssVar}), ${opacityValue})`;
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${cssVar}), var(${opacityVariable}, 1))`;
    }
    return `rgb(var(${cssVar}))`;
  };
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: "class", // or 'media' or 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "128px",
      },
    },
    fontFamily: {
      en: [
        "Segoe UI",
        "Frutiger",
        "Frutiger Linotype",
        "Dejavu Sans",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],

      fa: ["Vazirmatn"],
      fd: ["Sahel FD"],
      sahel: ["Sahel"],
    },

    extend: {
      colors: {
        primary: "#f97316",
        muted: "#64748b",
        secondary: "#fb923c",
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",

        // primary: {
        //   50: customColors("--c-primary-50"),
        //   100: customColors("--c-primary-100"),
        //   200: customColors("--c-primary-200"),
        //   300: customColors("--c-primary-300"),
        //   400: customColors("--c-primary-400"),
        //   500: customColors("--c-primary-500"),
        //   6000: customColors("--c-primary-600"),
        //   700: customColors("--c-primary-700"),
        //   800: customColors("--c-primary-800"),
        //   900: customColors("--c-primary-900"),
        // },
        secondary: {
          50: customColors("--c-secondary-50"),
          100: customColors("--c-secondary-100"),
          200: customColors("--c-secondary-200"),
          300: customColors("--c-secondary-300"),
          400: customColors("--c-secondary-400"),
          500: customColors("--c-secondary-500"),
          6000: customColors("--c-secondary-600"),
          700: customColors("--c-secondary-700"),
          800: customColors("--c-secondary-800"),
          900: customColors("--c-secondary-900"),
        },
        neutral: {
          50: customColors("--c-neutral-50"),
          100: customColors("--c-neutral-100"),
          200: customColors("--c-neutral-200"),
          300: customColors("--c-neutral-300"),
          400: customColors("--c-neutral-400"),
          500: customColors("--c-neutral-500"),
          6000: customColors("--c-neutral-600"),
          700: customColors("--c-neutral-700"),
          800: customColors("--c-neutral-800"),
          900: customColors("--c-neutral-900"),
        },
        dark: {
          700: "#798096",
          800: "#2d303f",
          900: "#262834",
        },
      },
    },
  },

  screens: {
    xs: "240px",
    // => @media (min-width: 640px) { ... }
    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }
    sp: "900px",

    lg: "1280px",
    // => @media (min-width: 1024px) { ... }

    tb: "1152px",
    // => @media (min-width: 1280px) { ... }

    laptop: "1199px",
    // => @media (min-width: 1280px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    lp4: "1360px",
    // => @media (min-width: 1536px) { ... }

    lp3: "1366px",
    // => @media (min-width: 1536px) { ... }

    lp2: "1400px",
    // => @media (min-width: 1536px) { ... }

    lp: "1440px",
    // => @media (min-width: 1536px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }

    hd: "1920px",
    // => @media (min-width: 1536px) { ... }

    "3xl": "1930px",
    // => @media (min-width: 1536px) { ... }

    "4xl": "3840px",
    // => @media (min-width: 1536px) { ... }
  },

  variants: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
  ],
};
