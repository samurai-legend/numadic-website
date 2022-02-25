module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      "heading-1": ["5rem", "2.5rem"],
      "heading-2": ["2.5rem", "2.5rem"],
      "heading-3": ["1.5rem", "2.5rem"],
      "body-1": ["1.25rem", "2.5rem"],
      "body-2": ["1rem", "2.5rem"],
      "body-3": ["0.875rem", "2.5rem"],
      caption: ["0.75rem", "2.5rem"],
      overline: ["0.875rem", "2.5rem"],

      "heading-1-lg": ["3rem", "2.5rem"],
      "heading-2-lg": ["2.2rem", "2.5rem"],
      "heading-3-lg": ["1.2rem", "2.5rem"],
      "body-1-lg": ["1rem", "2.5rem"],
      "body-2-lg": [".75rem", "2.5rem"],
      "body-3-lg": ["0.675rem", "2.5rem"],

      "heading-1-sm": ["2.125rem", "2.5rem"],
      "heading-2-sm": ["1.438rem", "2.5rem"],
      "heading-3-sm": ["1rem", "2.5rem"],
      "body-1-sm": ["1rem", "1.5rem"],
      "body-2-sm": ["0.875rem", "1.2rem"],
      "body-3-sm": ["0.75rem", "1rem"],
      caption: ["0.688rem", "2.5rem"],
      overline: ["0.625rem", "2.5rem"],
    },
    extend: {
      colors: {
        "blue-primary": "#00C2FF",
        "blue-dark": "#2354FF",
        "blue-light": "#70DDFF",
        "black-dark": "#1B1B1B",
        "gray-light": "#999999",
        success: "#22CD9D",
      },
      screens: {
        "tall-xs": { raw: "(min-height: 640px)" },
        "tall-sm": { raw: "(min-height: 768px)" },
        "tall-md": { raw: "(min-height: 896px)" },
        "tall-lg": { raw: "(min-height: 920px)" },
        "w-h-lg": { raw: "(max-height: 850px) and (min-width: 1535px)" },
        "1xl": "1440px",
      },
      container: {
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6.216rem",
          "2xl": "6.216rem",
        },
      },
    },
    fontFamily: {
      sans: ["Aeonik", "sans-serif"],
    },
  },
  variants: {
    extend: {
      fontSmoothing: ["hover", "focus"],
      fontSize: ["hover", "focus"],
      fontStyle: ["hover", "focus"],
      fontWeight: ["hover", "focus"],
      animation: ["hover", "focus"],
    },
  },
  plugins: [],
};
