const tailwindcss = require('tailwindcss')

function css () {
  return tailwindcss({
    mode: 'jit', // Just-In-Time Compiler
    purge: ['./src/**/*.hbs'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  })
}

module.exports = {
  css
}