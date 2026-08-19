import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0B0E1A",
        card: "#151A2E",
        dusk: "#4B3F72",
        moon: "#D8DCE8",
        ember: "#FFB454",
        alert: "#E5342B",
        dim: "#7C82A0",
      },
      fontFamily: {
        display: ["var(--font-bebas)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -30px) scale(1.08)" },
        },
        countdown: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "251" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        drift: "drift 12s ease-in-out infinite",
        driftSlow: "drift 18s ease-in-out infinite reverse",
        countdown: "countdown 8s linear forwards",
        fadeUp: "fadeUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
