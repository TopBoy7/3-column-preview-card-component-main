/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'

    },
    extend: {
      spacing: {
      '72': '48rem',
      },
      colors: {
        brightRed: 'hsl(31, 77%, 52%)',
        darkBlue: 'hsl(184, 100%, 22%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(179, 100%, 13%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
      


    },
  },
  plugins: [],
}
