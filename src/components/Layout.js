import { dark, light } from "../assets/theme";
import styled, { ThemeProvider } from "styled-components";

import Header from "./Header";
import React from "react";
import { Reset } from "styled-reset";

const LayoutFrame = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  margin: 30px;
  min-height: calc(100vh - 60px);
`;

const StyledMain = styled.main`
  max-width: 800px;
  margin: auto;
`;

const Layout = ({ children, theme: themeId }) => {
  let theme;
  switch (themeId) {
    case "dark":
      theme = dark;
      break;
    default:
      theme = light;
      break;
  }

  return (
    <LayoutFrame>
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
