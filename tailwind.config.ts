import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070B",
        "bg-2": "#0F172A",
        glass: "rgba(255,255,255,0.08)",
        "glass-border": "rgba(255,255,255,0.14)",
        blue: "#3B82F6",
        purple: "#8B5CF6",
        cyan: "#22D3EE",
        ink: "#C7D0E0",
        "ink-dim": "#7C8AA5",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": {
            boxShadow:
              "0 0 24px rgba(139,92,246,.35), 0 0 0 rgba(59,130,246,0)",
          },
          "50%": {
            boxShadow:
              "0 0 46px rgba(139,92,246,.6), 0 0 20px rgba(34,211,238,.35)",
          },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
