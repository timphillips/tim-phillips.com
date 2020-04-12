import { dark, light } from "../assets/theme";
import styled, { ThemeProvider } from "styled-components";

import { Background } from "../components/backgroundImage";
import Layout from "../components/layout";
import Nav from "../components/Nav";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const Title = styled.h1`
  margin: 40px 0 0 0;
  color: ${props => props.theme.color.main};
  font-size: 75px;
  text-shadow: ${props => (props.theme === light ? "2px 2px #999" : undefined)};
`;

const Subtitle = styled.h2`
  margin: 20px 0 0 0;
  color: ${props => props.theme.color.main};
  font-size: 30px;
  font-weight: 400;
`;

const HomePage = ({ data, location }) => {
  const [background, setBackground] = React.useState("background1");

  const backgrounds = data.backgrounds.edges.map(e => e.node);
  const theme = backgrounds.find(b => b.name === background)?.theme;

  const siteTitle = data.site.siteMetadata.title;
  return (
    <>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Layout location={location} title={siteTitle}>
          <SEO title="Home" />
          <Nav />
          <Title>Tim Phillips</Title>
          <Subtitle>full stack software developer</Subtitle>
          <Background
            current={background}
            images={backgrounds}
            onChange={setBackground}
          />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
`;
