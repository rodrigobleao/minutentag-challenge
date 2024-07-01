import COLORS from './src/styles/colors';
import FONT_FAMILY from './src/styles/fontFamily';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: { colors: COLORS, fontFamily: FONT_FAMILY },
  },
  plugins: [],
};
