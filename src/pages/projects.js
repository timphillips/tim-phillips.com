import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import styled from "styled-components";

const Project = styled.li`
  border-radius: 2px;
  padding: 20px;
  background-color: white;
  box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
  min-height: 300px;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.03);
`;

const ProjectTitle = styled.h3`
  font-weight: 700;
`;

const ProjectLinks = styled.div``;

const ProjectExternalLink = styled.a`
  color: ${props => props.theme.color.main};
  margin-left: 10px;
  cursor: pointer;
`;

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  margin: 0 200px;
  padding: 50px 0;

  @media (min-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProjectDescription = styled.div`
  font-family: Arial;
`;

const ProjectsPage = ({ data, location }) => {
  console.log(data);
  return (
    <Layout location={location} theme="dark">
      <SEO title="About" />
      <ProjectsList>
        {data.projects.edges.map(({ node }) => (
          <Project key={node.id}>
            <ProjectHeader>
              <ProjectTitle>{node.name}</ProjectTitle>
              <ProjectLinks>
                {node.source && (
                  <ProjectExternalLink
                    href={node.source}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={`Source for ${node.name} on GitHub`}
                  >
                    <FaGithub />
                  </ProjectExternalLink>
                )}
                {node.url && (
                  <ProjectExternalLink
                    href={node.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={`${node.name}`}
                  >
                    <FaExternalLinkAlt />
                  </ProjectExternalLink>
                )}
              </ProjectLinks>
            </ProjectHeader>
            <ProjectDescription>{node.description}</ProjectDescription>
          </Project>
        ))}
      </ProjectsList>
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
    projects: allProjectsYaml {
      edges {
        node {
          description
          id
          name
          source
          url
          year
        }
      }
    }
  }
`;
