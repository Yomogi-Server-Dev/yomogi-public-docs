/** @type {import('tailwindcss').Config} */
export const content = [
  './src/components/**/*.{js,jsx,ts,tsx}', // componentsディレクトリのみに制限
];
export const theme = {
  extend: {},
};
export const plugins = [];
export const darkMode = ['class', '[data-theme="dark"]'];