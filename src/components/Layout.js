import { dark, resolveTheme } from "../assets/theme";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { Reset } from "styled-reset";
import { useTheme } from "../hooks/theme";

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

  @media (max-width: 400px) {
    padding: 0 30px;
  }
  @media (max-width: 360px) {
    padding: 0 10px;
  }
`;

const StyledMain = styled.main`
  grid-area: main;
  color: ${props => props.theme.color.main};
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.main};
    transition: background 0.2s ease-out;
  }

  body.dark {
    background-color: ${dark.color.background};
  }
`;

const Layout = ({ children }) => {
  const [themeId, toggleTheme] = useTheme();

  const theme = resolveTheme(themeId);
  console.log(theme);
  return (
    <LayoutFrame>
      <Reset />
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </ThemeProvider>
    </LayoutFrame>
  );
};

export default Layout;
