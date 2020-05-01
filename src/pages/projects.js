import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Layout from "../components/Layout";
import LockSvg from "../assets/lock.svg";
import { Paragraph } from "../components/Paragraph";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import styled from "styled-components";

const Project = styled.li``;

const ProjectContent = styled.div`
  border-radius: 2px;
  padding: 20px;
  min-height: 150px;
  transition: background-color 0.3s;
  border-left: 3px solid ${props => props.color.main};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectIcon = styled.div`
  opacity: 0.5;
  transition: opacity 0.3s;
`;

const ProjectLink = styled.a`
  cursor: pointer;
  display: grid;
  color: ${props => props.theme.color.main};
  text-decoration: none;

  grid-template-columns: 230px 1fr;
  grid-gap: 20px;

  &:focus > ${ProjectIcon}, &:hover > ${ProjectIcon} {
    opacity: 1;
  }

  &:focus > ${ProjectContent}, &:hover > ${ProjectContent} {
    background-color: ${props => props.color.background};
  }

  @media (max-width: 720px) {
    & > ${ProjectIcon} {
      display: none;
    }
    grid-template-columns: 1fr;
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.03);
`;

const ProjectTitle = styled.h3`
  font-weight: 700;
  font-family: "Quando", serif;
`;

const ProjectExternalLinks = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProjectExternalLink = styled.a`
  color: ${props => props.theme.color.main};
  margin-left: 10px;
  cursor: pointer;
`;

const ProjectsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  margin: 40px 0;
`;

const ProjectDescription = styled.p`
  line-height: 25px;
  margin-top: 10px;
  margin-bottom: 20px;
  flex: 1;
`;

const ProjectTech = styled.div``;

const Tech = styled.span`
  display: inline-block;
  padding: 6px 10px 5px;
  margin: 0 5px 5px 0;
  font-weight: 500;
  font-size: 11px;
  color: ${props => props.theme.color.main};
  border: 1px dashed rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  white-space: nowrap;
`;

const ProjectsPage = ({ data, location }) => {
  React.useEffect(() => {
    for (const path of document.querySelectorAll("path")) {
      path.style.strokeDashoffset = 0;
    }
  }, []);

  return (
    <Layout location={location} theme="dark">
      <SEO title="About" />
      <Paragraph style={{ textAlign: "left", marginTop: 40 }}>
        This is a collection of some of my personal projects and coding
        experiments.
      </Paragraph>
      <ProjectsList>
        {data.projects.edges.map(({ node }) => (
          <Project key={node.id}>
            <ProjectLink
              color={node.color}
              href={node.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectIcon>
                <LockSvg
                  width="100%"
                  height="100%"
                  style={{ maxHeight: 200, stroke: node.color.main }}
                />
              </ProjectIcon>
              <ProjectContent color={node.color}>
                <ProjectHeader>
                  <ProjectTitle>{node.name}</ProjectTitle>
                  <ProjectExternalLinks>
                    {node.source && (
                      <ProjectExternalLink
                        href={node.source}
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Open Source on GitHub"
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
                  </ProjectExternalLinks>
                </ProjectHeader>
                <ProjectDescription>{node.description}</ProjectDescription>
                <ProjectTech>
                  {node.tech.map(tech => (
                    <Tech key={tech}>{tech}</Tech>
                  ))}
                </ProjectTech>
              </ProjectContent>
            </ProjectLink>
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
