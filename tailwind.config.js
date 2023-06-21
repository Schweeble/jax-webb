/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      red: '#d32f23',
      beige: '#d6c8af',
      white: '#f2efeb',
      green: '#10492f',
      blue: '416b9a',
    },
    backgroundImage: {
      strawberry: "url('/public/strawberry.svg')",
      pepper: "url('/public/pepper.svg')",
      mushroom: "url('/public/mushroom.svg')",
    },
  },
  plugins: [],
};
