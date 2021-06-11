module.exports = {
  purge: ["./public/**/*.html", ".src/**/*.css"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "1/5": "20%",
        "3/20": "15%",
        "1/6": "16.6%",
        "1/12": "8.25%",
        "1/10": "10%",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
        "2/5": "40%",
        "1/8": "12.5%",
        "11/20": "55%",
        "1/20": "5%",
      },
      width: {
        "11/20": "55%",
        "1/5": "20%",
        "3/20": "15%",
        "1/6": "16.6%",
        "1/12": "8.25%",
        "1/10": "10%",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
        "2/5": "40%",
        "1/8": "12.5%",

        "1/20": "5%",
      },
      height: {
        "11/20": "55%",
        "1/5": "20%",
        "3/20": "15%",
        "1/6": "16.6%",
        "1/12": "8.25%",
        "1/10": "10%",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
        "2/5": "40%",
        "1/8": "12.5%",
        "1/20": "5%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
