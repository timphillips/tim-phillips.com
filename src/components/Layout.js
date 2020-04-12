import { dark, light } from "../assets/theme";
import { graphql, useStaticQuery } from "gatsby";
import styled, { ThemeProvider } from "styled-components";

import { Background } from "../components/Background";
import Nav from "../components/Nav";
import React from "react";

const LayoutFrame = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-family: "Quando", serif;
  max-width: 1200px;
  padding-left: 30px;
  padding-right: 30px;
`;

const Layout = ({ children, initialBackground }) => {
  const { backgrounds } = useStaticQuery(graphql`
    query {
      backgrounds: allBackgroundsYaml {
        edges {
          node {
            name
            theme
            image {
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const [background, setBackground] = React.useState(
    initialBackground || backgrounds.edges[0].node.name
  );

  const theme = backgrounds.edges.find(b => b.node.name === background)?.node
    .theme;

  return (
    <LayoutFrame>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <header>
          <Nav state={{ background }} />
        </header>
        <main>{children}</main>
        <Background
          current={background}
          images={backgrounds.edges.map(b => b.node)}
          onChange={setBackground}
        />
      </ThemeProvider>
    </LayoutFrame>
  );
};

export default Layout;
