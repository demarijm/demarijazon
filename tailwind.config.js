module.exports = {
  content: [
    './pages/**/*.{html,js,tsx,ts}',
    './components/**/*.{html,js,tsx,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
}