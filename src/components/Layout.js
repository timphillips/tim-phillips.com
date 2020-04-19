import { dark, light, opaque } from "../assets/theme";
import styled, { ThemeProvider } from "styled-components";

import Header from "./Header";
import React from "react";
import { Reset } from "styled-reset";

const LayoutFrame = styled.div`
  font-family: "Quando", serif;
  margin: 30px;
  min-height: calc(100vh - 60px);
  // background-color: ${props => props.backgroundColor};
`;

const StyledMain = styled.main`
  max-width: 800px;
  margin: auto;
`;

const Layout = ({ children, theme: themeId, doNotSetBackgroundColor }) => {
  let theme;
  switch (themeId) {
    case "dark":
      theme = dark;
      break;
    case "opaque":
      theme = opaque;
      break;
    default:
      theme = light;
      break;
  }

  return (
    <LayoutFrame
      backgroundColor={!doNotSetBackgroundColor && theme.color.background}
    >
      <Reset />
      <ThemeProvider theme={theme}>
        <Header />
        <StyledMain>{children}</StyledMain>
        {/* <footer>Add a footer?</footer> */}
      </ThemeProvider>
    </LayoutFrame>
  );
};

export default Layout;
