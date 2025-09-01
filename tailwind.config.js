const config = {
  plugins: ["@tailwindcss/postcss"],
};
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
