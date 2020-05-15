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
  padding: 0 50px;
  max-width: 800px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

const StyledMain = styled.main`
  grid-area: main;
  color: ${props => props.theme.color.main};
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
