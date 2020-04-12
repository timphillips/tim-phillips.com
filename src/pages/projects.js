import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location} initialBackground={location.state.background}>
      <SEO title="About" />
      <div>Projects</div>
    </Layout>
  );
};

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
