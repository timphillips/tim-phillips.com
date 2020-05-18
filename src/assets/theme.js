export const light = {
  id: "light",
  color: {
    main: "rgb(55, 71, 79)",
    hover: "rgba(55, 71, 79, 0.1)",
    background: "rgb(255, 255, 255)"
  }
};

export const dark = {
  id: "dark",
  color: {
    main: "rgba(255, 255, 255, 1)",
    hover: "rgba(255, 255, 255, 0.3)",
    background: "rgb(55, 71, 79)"
  }
};

export const resolveTheme = themeId => {
  switch (themeId) {
    case "dark":
      return dark;
    default:
      return light;
  }
};
