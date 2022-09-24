/** @type {import('https://esm.sh/tailwindcss@3.1.8').Config} */

module.exports = {
  content: ["./src/**/*.{tsx,ts,md,html,njk}"],
  theme: {
    extend: {},
  },

  // daisy UI config
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
}
