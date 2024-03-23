/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light': '#FAFAFA',
      'gray-light': '#f0f0f0',
      'gray': '#5e5e5e',
      'gray-dark': '#121212',
      'dark': '#1E1E1E',
      'orange': '#FF3C00',
      'orange-dark': '#f03800',
    },
    fontFamily: {
      sans: ['var(--font-poppins)'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}
