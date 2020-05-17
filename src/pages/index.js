import { Background, BackgroundPicker } from "../components/Background";

import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query {
    backgrounds: allBackgroundsYaml {
      edges {
        node {
          id
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

const HomePage = ({ data: { backgrounds } }) => {
  const [backgroundId, setBackgroundId] = React.useState(
    backgrounds.edges[0].node.id // default to first image
  );

  const background = backgrounds.edges.find(b => b.node.id === backgroundId);
  return (
    <Layout theme={background?.node?.theme}>
      <SEO title="Home" />
      <BackgroundPicker
        currentId={backgroundId}
        imageIds={backgrounds.edges.map(b => b.node.id)}
        onChange={setBackgroundId}
      />
      <Background
        currentId={backgroundId}
        images={backgrounds.edges.map(b => b.node)}
      />
    </Layout>
  );
};

export default HomePage;
