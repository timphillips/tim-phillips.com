import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import styled from "styled-components";

const Content = styled.section`
  margin-top: 40px;
`;

const Project = styled.li`
  cursor: pointer;
  border-radius: 2px;
  padding: 20px;
  min-height: 150px;
  transition: background-color 0.5s, box-shadow 0.5s;
  border-left: 3px solid ${props => props.color.main};

  &::selection {
    color: black;
    background-color: white;
  }

  &:hover {
    background-color: ${props => props.color.background};
  }
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
  padding: 50px 0;
`;

const ProjectDescription = styled.div`
  font-family: Arial;
  line-height: 20px;
`;

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location} theme="dark">
      <SEO title="About" />
      <Content>
        <Paragraph>
          These are some small projects I've worked on in my free time.
        </Paragraph>
        <ProjectsList>
          {data.projects.edges.map(({ node }) => (
            <Project key={node.id} color={node.color}>
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
      </Content>
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
          color {
            background
            main
          }
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
