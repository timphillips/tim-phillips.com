const font = {
  highlight:
    "'Inter', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
  normal:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif"
};

const light = {
  id: "light",
  color: {
    main: "rgb(55, 71, 79)",
    hover: "rgba(55, 71, 79, 0.1)",
    background: "rgb(255, 255, 255)"
  },
  font
};

const dark = {
  id: "dark",
  color: {
    main: "rgba(255, 255, 255, 1)",
    hover: "rgba(255, 255, 255, 0.3)",
    background: "rgb(55, 71, 79)"
  },
  font
};

// this uses the CommonJS export syntax because this file is
// consumed by the "gatsby-styled-components-dark-mode" plugin
module.exports = {
  dark,
  light
};
