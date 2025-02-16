/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
        space: ["Space Grotesk", "sans-serif"],
        medievaltech: ["Orbitron", "sans-serif"], // Futuristic yet medieval-inspired font
      },
      colors: {
        regal: {
          DEFAULT: "#8B0000",
          50: '#FFE4E1',    // Misty rose (lightest)
          100: '#FFC0CB',   // Pink
          200: '#FF6347',   // Tomato
          300: '#CD5C5C',   // Indian red
          400: '#B22222',   // Firebrick
          500: '#8B0000',   // Dark red (main color)
          600: '#800000',   // Maroon
          700: '#6B0000',   // Dark maroon
          800: '#5C0000',   // Very dark red
          900: '#4B0000',   // Darkest red
          DEFAULT: '#8B0000', // Default to the 500 shade
          gold: "#FFD700",    // Bright gold for highlights
          cream: "#FFF8DC",   // Soft cream for backgrounds
          dark: "#4B0082",    // Deep purple-indigo for depth
          light: "#9932CC",   // Vibrant purple for futuristic touch
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0A0A0A", // Very dark background for futuristic feel
        foreground: "#E0E0E0",  // Light gray for text
        primary: {
          DEFAULT: "#8B0000",
          foreground: "#FFD700",
        },
        secondary: {
          DEFAULT: "#4B0082",
          foreground: "#FFF8DC",
        },
        accent: {
          DEFAULT: "#FFD700",
          foreground: "#8B0000",
        },
        destructive: {
          DEFAULT: "#FF4500",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1A1A1A",
          foreground: "#888888",
        },
      },
      borderRadius: {
        lg: "0.75rem",     // Slightly angular for medieval feel
        md: "0.5rem",      // Modern, clean edges
        sm: "0.25rem",
        xl: "1rem",        // Extra large for dramatic effects
      },
      boxShadow: {
        'medieval': '0 4px 6px -1px rgba(139, 0, 0, 0.3), 0 2px 4px -1px rgba(255, 215, 0, 0.2)',
        'futuristic': '0 0 15px rgba(255, 215, 0, 0.3), 0 0 25px rgba(139, 0, 0, 0.2)',
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "1", filter: "brightness(100%)" },
          "50%": { opacity: "0.8", filter: "brightness(150%)" },
        },
        "medieval-shimmer": {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        "tech-pulse": {
          "0%": { transform: "scale(1)", opacity: "0.7" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0.7" },
        },
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "medieval-shimmer": "medieval-shimmer 3s linear infinite",
        "tech-pulse": "tech-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
