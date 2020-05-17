import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import BookSvg from "../assets/book.svg";
import CameraSvg from "../assets/camera.svg";
import Layout from "../components/Layout";
import LockSvg from "../assets/lock.svg";
import { Paragraph } from "../components/Paragraph";
import ParallaxSvg from "../assets/parallax.svg";
import ProfileSvg from "../assets/profile.svg";
import React from "react";
import SEO from "../components/SEO";
import TravelMapSvg from "../assets/travel-map.svg";
import VisibilitySensor from "react-visibility-sensor";
import { graphql } from "gatsby";
import styled from "styled-components";

const ProjectIcon = styled.div`
  display: flex;
  justify-content: center;
`;

const Project = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 210px 1fr;
  grid-gap: 20px;

  @media (max-width: 720px) {
    & > ${ProjectIcon} {
      display: none;
    }
    grid-template-columns: 1fr;
  }
`;

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

const ProjectLink = styled.a`
  cursor: pointer;
  color: ${props => props.theme.color.main};
  text-decoration: none;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  &:focus ~ ${ProjectIcon}, &:hover ~ ${ProjectIcon} {
    opacity: 1;
  }

  & ~ ${ProjectIcon} > svg {
    fill: transparent;
    transition: ;
  }

  &:hover ~ ${ProjectIcon} > svg {
    fill: ${props => props.color.background};
  }

  &:focus ~ ${ProjectContent}, &:hover ~ ${ProjectContent} {
    background-color: ${props => props.color.background};
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
`;

const ProjectTitle = styled.h3`
  font-family: "Quando", serif;
  font-weight: 700;
`;

const ProjectExternalLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`;

const ProjectExternalLink = styled.a`
  color: ${props => props.theme.color.main};
  margin-left: 10px;
  cursor: pointer;
`;

const ProjectList = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  margin: 40px 0;
`;

const ProjectDescription = styled.p`
  line-height: 23px;
  margin-top: 10px;
  margin-bottom: 18px;
  flex: 1;
`;

const TechList = styled.ul``;

const TechItem = styled.li`
  display: inline-block;
  padding: 6px 10px 5px;
  margin: 6px 3px 0 3px;
  font-weight: 500;
  font-size: 11px;
  border: 1px dashed rgba(0, 0, 0, 0.4);
  border-radius: 3px;
`;

const onProjectIconVisiblyChanged = (visible, iconId, fillColor) => {
  if (!visible) {
    return;
  }
  const path = document.querySelector(`#projectIcon_${iconId}`);
  if (path) {
    path.style.strokeDashoffset = 0;
  }
};

const iconsByProjectId = {
  lock: LockSvg,
  "personal-website": ProfileSvg,
  "scottish-bame-writers-network": BookSvg,
  "travel-map": TravelMapSvg,
  parallax: ParallaxSvg,
  snapshots: CameraSvg
};

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

const ProjectsPage = ({ data }) => (
  <Layout theme="dark">
    <SEO title="Projects" />
    <Paragraph style={{ textAlign: "left", marginTop: 40 }}>
      This is a collection of some of my personal projects and coding
      experiments.
    </Paragraph>
    <ProjectList>
      {data.projects.edges.map(({ node }) => {
        const Icon = iconsByProjectId[node.id];
        return (
          <Project key={node.id} color={node.color}>
            <ProjectLink
              color={node.color}
              href={node.url}
              rel="noopener noreferrer"
              target="_blank"
            ></ProjectLink>
            <ProjectIcon>
              <VisibilitySensor
                partialVisibility
                minTopValue={100}
                intervalDelay
                onChange={visible =>
                  onProjectIconVisiblyChanged(
                    visible,
                    node.id,
                    node.color.background
                  )
                }
              >
                <Icon
                  id={`projectIcon_${node.id}`}
                  width="100%"
                  height="100%"
                  style={{
                    width: 180,
                    stroke: node.color.main,
                    strokeWidth: 1.3,
                    strokeDasharray: 2200,
                    strokeDashoffset: 2200,
                    transition:
                      "stroke-dashoffset 4000ms ease-in-out 0s, fill 0.3s"
                  }}
                />
              </VisibilitySensor>
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
              <TechList>
                {node.tech.map(tech => (
                  <TechItem key={tech}>{tech}</TechItem>
                ))}
              </TechList>
            </ProjectContent>
          </Project>
        );
      })}
    </ProjectList>
  </Layout>
);

export default ProjectsPage;
