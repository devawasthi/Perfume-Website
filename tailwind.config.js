module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Adding Montserrat
      },
      colors: {
        charcoal: {
          900: '#1a1a1a',
        },
        plum: {
          800: '#4a154b',
        },
        gold: {
          500: '#d4af37',
        },
        ivory: {
          200: '#f5f5dc',
        },
      },
    },
  },
  plugins: [],
};
