// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        petspace: {
          bg: "#EDD9C7", // Warm Oat background
          highlight: "#D7B892", // Soft lighter accent

          brown: {
            100: "#D7B892", // light brown highlight (same as highlight)
            300: "#A47445", // base logo brown
            500: "#8C5F37", // darker UI text/buttons
            700: "#724B29", // deeper accents
            900: "#59381E", // strongest brown
          },

          border: "#C9B29B", // soft muted brown for borders
          shadow: "#B89E87", // warm soft shadow (low opacity recommended)
        },
      },
    },
  },
};
