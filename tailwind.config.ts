import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B5ED7",
          indigo: "#4F46E5",
          teal: "#14B8A6",
          ink: "#0F172A",
          text: "#334155",
          mist: "#F8FAFC"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "serif"]
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(15, 23, 42, 0.12)",
        glow: "0 0 60px rgba(20, 184, 166, 0.24)"
      },
      backgroundImage: {
        "medical-gradient":
          "radial-gradient(circle at 15% 20%, rgba(20,184,166,.18), transparent 28%), radial-gradient(circle at 80% 0%, rgba(79,70,229,.18), transparent 32%), linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 52%, #EEF2FF 100%)"
      }
    }
  },
  plugins: [animate]
};

export default config;
