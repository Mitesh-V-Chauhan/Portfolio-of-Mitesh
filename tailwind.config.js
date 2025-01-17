// const plugin = require("tailwindcss/plugin");

// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

//   theme: {
//     extend: {
//       // Adding custom perspective for 3D effect
//       perspective: {
//         '150rem': '150rem',
//       },
//       // Optional: Customize rotateY angles
//       rotateY: {
//         '180': '180deg',
//       },
//     },
//   },

//   plugins: [
//     plugin(function ({ addUtilities }) {
//       addUtilities({
//         // Text Shadow Glow
//         ".text-shadow-glow": {
//           textShadow:
//             "0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 223, 0, 0.6), 0 0 30px rgba(255, 223, 0, 0.4)",
//         },

//         // Backface hidden utility (to hide the back of the card while rotating)
//         ".backface-hidden": {
//           backfaceVisibility: "hidden",
//         },

//         // Preserve 3D transformations (for rotating cards)
//         ".transform-style-3d": {
//           transformStyle: "preserve-3d",
//         },

//         // Perspective utility for 3D effect
//         ".perspective-150rem": {
//           perspective: "150rem",
//         },
//       });
//     }),
//   ],
// };


// @keyframes jelly {
//   0% {
//     transform: scale(1);
//   }
//   30% {
//     transform: scale(1.1, 0.9);
//   }
//   50% {
//     transform: scale(0.9, 1.1);
//   }
//   70% {
//     transform: scale(1.05, 0.95);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

// @layer utilities {
//   .animate-jelly {
//     animation: jelly 0.5s ease-in-out;
//   }
// }


const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      // Adding custom perspective for 3D effect
      perspective: {
        '150rem': '150rem',
      },
      // Optional: Customize rotateY angles
      rotateY: {
        '180': '180deg',
      },
      // Extend animations
      animation: {
        'jelly': 'jelly 0.5s ease-in-out',
      },
      // Custom Keyframes for Jelly animation
      keyframes: {
        jelly: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.1, 0.9)' },
          '50%': { transform: 'scale(0.9, 1.1)' },
          '70%': { transform: 'scale(1.05, 0.95)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // Text Shadow Glow
        ".text-shadow-glow": {
          textShadow:
            "0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 223, 0, 0.6), 0 0 30px rgba(255, 223, 0, 0.4)",
        },

        // Backface hidden utility (to hide the back of the card while rotating)
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },

        // Preserve 3D transformations (for rotating cards)
        ".transform-style-3d": {
          transformStyle: "preserve-3d",
        },

        // Perspective utility for 3D effect
        ".perspective-150rem": {
          perspective: "150rem",
        },
      });
    }),
  ],
};