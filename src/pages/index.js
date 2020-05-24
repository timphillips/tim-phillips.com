import { Background, BackgroundPicker } from "../components/Background";

import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import styled from "styled-components";

const Content = styled.section`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
`;

export const pageQuery = graphql`
  query {
    backgrounds: allBackgroundsYaml {
      edges {
        node {
          id
          name
          position
          expandIconColor
          image {
            childImageSharp {
              fluid(maxWidth: 4000) {
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

  return (
    <Layout>
      <SEO title="Home" />
      <Content>
        <BackgroundPicker
          currentId={backgroundId}
          imageIds={backgrounds.edges.map(b => b.node.id)}
          onChange={setBackgroundId}
        />
        <Background
          currentId={backgroundId}
          images={backgrounds.edges.map(b => b.node)}
        />
      </Content>
    </Layout>
  );
};

export default HomePage;
