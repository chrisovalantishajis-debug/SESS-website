import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "sess-bg": "var(--background)",
        "sess-surface": "var(--surface)",
        "sess-primary": "var(--primary)",
        "sess-highlight": "var(--primary-highlight)",
        "sess-accent-pink": "var(--accent-pink)",
        "sess-text-primary": "var(--text-primary)",
        "sess-muted": "var(--text-muted)",
        "sess-divider": "var(--divider)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
