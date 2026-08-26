/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#f6f8fd",
        bgCard: "#ffffff",
        borderLight: "#e2e8f0",
        borderIndigo: "#e0e7ff",
        accentPurple: "#6366f1",
        accentViolet: "#7c3aed",
        accentDarkPurple: "#4f46e5",
        textPrimary: "#0f172a",
        textSecondary: "#475569",
        textMuted: "#64748b"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        purpleGlow: '0 10px 30px -10px rgba(99, 102, 241, 0.25)',
        cardLight: '0 4px 20px -2px rgba(99, 102, 241, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
