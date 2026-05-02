/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        namkeenly: {
          navy: "#1F2937",
          accent: "#FFA500",
          cream: "#F7F4EE",
          sage: "#A8C5A1",
          clay: "#C9A88E",
          wheat: "#EDE6DB",
          ochre: "#B8956C",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "namkeenly-sm": "0 1px 2px 0 rgb(31 41 55 / 0.06)",
        namkeenly:
          "0 4px 14px -2px rgb(31 41 55 / 0.08), 0 2px 6px -2px rgb(31 41 55 / 0.06)",
        "namkeenly-md":
          "0 8px 24px -4px rgb(31 41 55 / 0.1), 0 4px 8px -4px rgb(31 41 55 / 0.06)",
        "namkeenly-lg":
          "0 16px 40px -8px rgb(31 41 55 / 0.12), 0 8px 16px -6px rgb(31 41 55 / 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        320: "320ms",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
