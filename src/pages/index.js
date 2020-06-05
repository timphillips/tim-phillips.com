import { Gallery, GalleryImagePicker } from "../components/Gallery";

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
    gallery: allGalleryYaml {
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

const HomePage = ({ data: { gallery } }) => {
  const [galleryImageId, setGalleryImageId] = React.useState(
    gallery.edges[0].node.id // default to first image
  );

  return (
    <Layout>
      <SEO title="Home" />
      <Content>
        <GalleryImagePicker
          currentId={galleryImageId}
          imageIds={gallery.edges.map(b => b.node.id)}
          onChange={setGalleryImageId}
        />
        <Gallery
          currentId={galleryImageId}
          images={gallery.edges.map(b => b.node)}
        />
      </Content>
    </Layout>
  );
};

export default HomePage;
