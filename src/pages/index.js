import { Background, BackgroundImagePicker } from "../components/Background";

import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const HomePage = ({ data, location }) => {
  const { backgrounds } = data;
  const [background, setBackground] = React.useState(
    backgrounds.edges[0].node.name
  );

  const theme = backgrounds.edges.find(b => b.node.name === background)?.node
    .theme;

  return (
    <Layout location={location} theme={theme}>
      <SEO title="Home" />
      <BackgroundImagePicker
        images={backgrounds.edges.map(b => b.node)}
        current={background}
        onChange={setBackground}
      />
      <Background
        current={background}
        images={backgrounds.edges.map(b => b.node)}
        onChange={setBackground}
      />
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    backgrounds: allBackgroundsYaml {
      edges {
        node {
          name
          theme
          style
          position
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
