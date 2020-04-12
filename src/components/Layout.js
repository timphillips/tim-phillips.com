import { dark, light } from "../assets/theme";
import { graphql, useStaticQuery } from "gatsby";

import { Background } from "../components/Background";
import Nav from "../components/Nav";
import React from "react";
import { ThemeProvider } from "styled-components";

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
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        fontFamily: ["Quando", "serif"],
        maxWidth: 1200,
        paddingLeft: 30,
        paddingRight: 30
      }}
    >
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
        {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
      </ThemeProvider>
    </div>
  );
};

export default Layout;
