import { Background } from "../components/backgroundImage";
import Layout from "../components/layout";
import Nav from "../components/Nav";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import styles from "./index.module.css";

const HomePage = ({ data, location }) => {
  const [background, setBackground] = React.useState("background1");

  const backgrounds = data.backgrounds.edges.map(e => e.node);
  const theme = backgrounds.find(b => b.name === background)?.theme;

  const siteTitle = data.site.siteMetadata.title;
  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <Nav theme={theme} />
        <h1 className={styles.title}>Tim Phillips</h1>
        <h2 className={styles.subtitle}>full stack software developer</h2>
        <Background
          images={backgrounds}
          background={background}
          onChange={setBackground}
        />
      </Layout>
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
