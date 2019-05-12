module.exports = {
  plugins: {
    "postcss-preset-env": {
      stage: 0,
      features: {
        "nesting-rules": true
      }
    },
    autoprefixer: { browsers: ["last 2 versions", "iOS >= 8"] },
    "postcss-pxtorem": {
      rootValue: 75,
      unitPrecision: 6,
      propList: [
        "font",
        "font-size",
        "line-height",
        "letter-spacing",
        "height",
        "width",
        "border-radius",
        "margin",
        "padding",
        "top",
        "left",
        "right",
        "bottom",
        "max-width"
      ],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
};
