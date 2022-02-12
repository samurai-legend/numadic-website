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

      "heading-1-xl": ["3.5rem", "2.5rem"],
      "heading-2-xl": ["2.2rem", "2.5rem"],
      "heading-3-xl": ["1.4rem", "2.5rem"],
      "body-1-xl": ["1rem", "2.5rem"],
      "body-2-xl": [".75rem", "2.5rem"],
      "body-3-xl": ["0.675rem", "2.5rem"],
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
        '1xl': '1440px',
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
