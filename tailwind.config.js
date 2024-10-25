/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",

        // gray
        gray: {
          1: "var(--gray-1)",
          2: "var(--gray-2)",
        },

        // neutral
        neutral: {
          4: "var(--neutral-4)",
          6: "var(--neutral-6)",
          7: "var(--neutral-7)",
          8: "var(--neutral-8)",
        },
      },
      screens: {
        "2sm": "500px",
      },
    },
  },
  plugins: [],
};
