import styled, { createGlobalStyle, withTheme } from "styled-components";

import Footer from "./Footer";
import Header from "./Header";
import React from "react";
import { Reset } from "styled-reset";
import { ThemeManagerContext } from "gatsby-styled-components-dark-mode";

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
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.main};
    transition: background 0.2s ease-out;
  }

  a:visited,
  a:active {
    color: inherit;
  }
`;

const Layout = withTheme(({ children }) => {
  const theme = React.useContext(ThemeManagerContext);
  return (
    <LayoutFrame>
      <Reset />
      <GlobalStyle />
      <Header toggleTheme={() => theme.toggleDark()} />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </LayoutFrame>
  );
});

export default Layout;
