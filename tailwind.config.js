export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Asegúrate de que Tailwind escanee estos archivos
    './public/index.html',         // Si tienes archivos HTML en el public
  ],
  theme: {
    extend: {
      colors: {
        primary: "#509415",
        secundary: "#093F51",
        warning: "#DCE6D3",
        success: "#093F51",
        gris: {
          100: "#D9D9D9",
          200: "#606060",
        },
        dark: {
          100: "#03050F",
          200: "#202020",
        },
      },
      fontFamily: {
        primary: ["var(--font-axiforma)"],
        secundary: ["var(--font-inter)"],
      },
      screens: {
        phone: "414px",
        tablet: "768px",
        tabletlg: "960px",
        tabletxl: "1024px",
        laptop: "1200px",
        laptoplg: "1400px",
        desktop: "1700px",
      },
    },
  },
  plugins: [],
};
