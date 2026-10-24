/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./blocks/**/*.php",
    "./*.php",
    "./template-parts/**/*.php",
    "./src/js/**/*.js",
    "./src/js/*.js",
    "./src/scss/*.{scss,css}",
    "./react/src/components/*.{jsx,js}",
    "./react/src/*.{jsx,js}",
    "./src/scss/**/*.{scss,css}"
  ],
  theme: {
    extend: {
      
      fontSize: {
        // Responsive typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        // Fluid typography
        'fluid-sm': 'clamp(0.875rem, 2vw, 1.125rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.25rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.5rem)',
        'fluid-xl': 'clamp(1.25rem, 3.5vw, 1.875rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2.25rem)',
        'fluid-3xl': 'clamp(1.875rem, 5vw, 2.75rem)',
        'fluid-4xl': 'clamp(2.25rem, 6vw, 3.75rem)',
        'fluid-5xl': 'clamp(3rem, 7vw, 4.5rem)',
        'fluid-6xl': 'clamp(3.75rem, 8vw, 5.5rem)',
      },
    },
  },
  plugins: [],
};
