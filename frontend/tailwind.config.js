// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1D4ED8",
          secondary: "#60A5FA",
          accent: "#FB923C",
          background: "#F9FAFB",
          card: "#FFFFFF",
          text: "#0F172A",
          muted: "#64748B",
        },
      },
    },
  },
  plugins: [],
};
