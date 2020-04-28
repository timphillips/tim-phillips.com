import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Layout from "../components/Layout";
import { Paragraph } from "../components/Paragraph";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import styled from "styled-components";

const Content = styled.section`
  margin-top: 40px;
  display: flex;
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
  font-family: "Quando", serif;
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
`;

const ProjectDescription = styled.div`
  line-height: 20px;
`;

const Tech = styled.span`
  display: inline-block;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 10px 5px;
  margin: 0 5px 5px 0;
  font-weight: 500;
  font-size: 11px;
  color: #fff;
  white-space: nowrap;
`;

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location} theme="dark">
      <SEO title="About" />
      <Content>
        <Paragraph style={{ width: 450, textAlign: "left", marginRight: 20 }}>
          This is a collection of some of my personal projects and coding
          experiments.
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
              {node.tech.map(tech => (
                <Tech key={tech}>{tech}</Tech>
              ))}
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
          tech
        }
      }
    }
  }
`;
