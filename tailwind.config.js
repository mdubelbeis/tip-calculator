module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'light-blue': '#C5E4E7',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-light- gray - cyan': 'hsl(189, 41%, 97%)',
        'pure-white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
