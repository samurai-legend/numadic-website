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
    },
    extend: {
      colors: {
        "blue-primary": "#00C2FF",
        "blue-dark": "#2354FF",
        "blue-light": "#70DDFF",
        "black-dark": "#1B1B1B",
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
