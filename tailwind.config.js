const colors = require('tailwindcss/colors')

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'semi-transparent': 'rgba(0, 0, 0, 0.33)',
          'js-yellow': '#f7df1e',
          'react-teal': '#61dafb',
          'jsx-purple': '#8a53a6',
          'node-green': '#8fc53f',
          'webpack-teal': '#87ccee',
          'mocha-brown': '#866244',
          'git-orange': '#e24c30',
          'tailwind-blue': '#16becb',
          'bootstrap-purple': '#6e10ea',
          'linux-red': '#e83e8c',
          'hardware-cyan': '#30ffcb'
        }
      },
    },
    plugins: [],
}