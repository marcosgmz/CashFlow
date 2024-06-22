/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        above: "0 -8px 16px rgb(229 231 235 / var(--tw-bg-opacity))"
      }
    }
  },
  plugins: []
};
