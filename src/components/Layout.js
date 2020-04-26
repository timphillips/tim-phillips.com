import { dark, light } from "../assets/theme";
import styled, { ThemeProvider } from "styled-components";

import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { Reset } from "styled-reset";

const LayoutFrame = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  min-height: 100vh;
  margin: auto;
  padding: 0 20px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex: 1;
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
        <Footer />
      </ThemeProvider>
    </LayoutFrame>
  );
};

export default Layout;
