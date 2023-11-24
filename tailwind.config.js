export default {
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          light: "#0E2D43",
          dark: "#01192A",
          neutral: "#FFFFFF",
        },
        secondary: {
          light: "#F8EBD6",
          lighter: "#FBF4E8",
          dark: "#DAB575",
          neutral: "#FEFAF5",
        },
        gray: {
          dark: "#8D929F",
          light: "#D4D8E0",
          neutral: "#EAEDF0",
        },
        muted: {
          DEFAULT: "#C9C0B9",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        black: {
          DEFAULT: "#000000",
        },
        saltpan: {
          DEFAULT: "#F0F6F3",
        },
      },
      fontSize: {
        h1: ["40px", "58px"],
        h2: ["32px", "45px"],
        h3: ["22px", "34px"],
        xl: ["20px", "34px"],
        l: ["16px", "32px"],
        m: ["16px", "28px"],
        body: ["16px", "28px"] /* same as m */,
        s: ["14px", "24px"],
        xs: ["13px", "22px"],
        "2xs": ["10px", "16px"],
        mini: ["10px", "16px"] /* same as 2xs */,
      },
      fontFamily: {
        sans: ["Proxima"],
        "proxima-nova": ["Proxima", "sans-serif"],
        lora: ["Lora"],
      },
    },
  },
}
