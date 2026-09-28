import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080B10",
          50: "#F4F5F7",
          900: "#0A0E14",
        },
        surface: {
          DEFAULT: "#10141C",
          raised: "#161B25",
          border: "rgba(237, 239, 242, 0.08)",
        },
        paper: "#EDEFF2",
        muted: "#8A93A3",
        amber: {
          DEFAULT: "#FF9F4A",
          soft: "#FFC385",
          dim: "#8A5A2C",
        },
        cyan: {
          DEFAULT: "#4AE5D1",
          soft: "#9FF3E7",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgba(8,11,16,0.9) 85%)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(255, 159, 74, 0.35)",
        "glow-cyan": "0 0 80px -20px rgba(74, 229, 209, 0.3)",
        card: "0 1px 0 0 rgba(237,239,242,0.06) inset",
      },
      keyframes: {
        "caret-blink": {
          "0%,49%": { opacity: "1" },
          "50%,100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "grain-shift": {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%,-2%)" },
          "30%": { transform: "translate(3%,-1%)" },
          "50%": { transform: "translate(-2%,3%)" },
          "70%": { transform: "translate(2%,2%)" },
          "90%": { transform: "translate(-3%,1%)" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1s step-end infinite",
        marquee: "marquee 34s linear infinite",
        grain: "grain-shift 8s steps(8) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
