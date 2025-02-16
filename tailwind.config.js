// tailwind.config.cjs
const tailwind_theme = require("tailwindcss/defaultTheme");

export default {
  darkMode: ["class"],
  content: [
    // ...
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,web-development}",
    "./node_modules/flyonui/dist/js/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...tailwind_theme.fontFamily.sans],
      "rouge-script": ["Rouge Script"],
    },
  },
  plugins: [require("flyonui"), require("flyonui/plugin")],
  flyonui: {
    themes: [
      {
        mytheme: {
          primary: "#a855f7",
          "primary-content": "#ffffff",
          secondary: "#1a2233",
          "secondary-content": "#ccced2",
          accent: "#00b6ff",
          "accent-content": "#000c16",
          neutral: "#2a1e1b",
          "neutral-content": "#d0cdcc",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          info: "#0078ff",
          "info-content": "#000516",
          success: "#99c600",
          "success-content": "#080e00",
          warning: "#ff8e00",
          "warning-content": "#160700",
          error: "#ff5b7b",
          "error-content": "#160305",
        },
      },
    ],
  },
};
