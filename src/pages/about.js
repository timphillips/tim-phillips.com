import BackgroundImage from "../components/backgroundImage";
import Layout from "../components/layout";
import Nav from "../components/Nav";
import React from "react";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import styled from "styled-components";

const Panel = styled.div`
  background-color: white;
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px;
  height: 400px;
  display: flex;
`;

const PanelLeft = styled.div`
  width: 500px;
  line-height: 25px;
`;

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <Nav theme="light" />
      <Panel>
        <PanelLeft>
          <p>
            <b>Hello.</b> I'm a <b>full stack software developer</b>{" "}
            specializing in the construction of <b>enterprise-grade</b> web
            applications.
          </p>
          <p>Blah blah blah</p>
          <p>
            Currently, I'm working as a senior developer on the{" "}
            <b>Executive Tools</b> team at{" "}
            <a href="https://www.pandell.com">Pandell</a>. Prior to that, I
            spent a number of years as the technical lead for Pandell's flagship
            accounting product, <a href="Pandell JV">Pandell JV</a>.
          </p>
          <p>I'm based in Edinburgh, Scotland.</p>
        </PanelLeft>
      </Panel>
      <BackgroundImage image={data.backgroundImage.childImageSharp.fluid} />
    </Layout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
