/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main Color Palette
        'ms-white': '#FFFFFF',
        'ms-nocturne': '#0F0735',
        'ms-eclipse': '#180E4A',
        'ms-blueberry': '#2F2564',
        'ms-orchid': '#8B37E8',
        // Secondary Color Palette
        'ms-fuschia': '#CD52D4',
        'ms-periwinkle': '#728AF6',
        'ms-coral': '#DC6F70',
        'ms-lavendar': '#D9B6FF',
        'ms-buttercream': '#F8EACF',
      },
    },
  },
  plugins: [],
}