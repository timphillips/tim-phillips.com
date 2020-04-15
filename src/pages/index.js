import { Background, BackgroundImagePicker } from "../components/Background";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";

const HomePage = ({ location }) => {
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
    backgrounds.edges[0].node.name
  );

  const theme = backgrounds.edges.find(b => b.node.name === background)?.node
    .theme;

  return (
    <Layout location={location} theme={theme} doNotSetBackgroundColor>
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
