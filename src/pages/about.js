import { HighlightParagraph, Paragraph } from "../components/Paragraph";

import Image from "gatsby-image";
import { Layout } from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import styled from "styled-components";

const Content = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4em;
  margin-top: 42px;

  @media (max-width: 730px) {
    grid-template-columns: 1fr;
  }
`;

const Bold = styled.span`
  font-weight: 500;
`;

const ProfilePic = styled(Image)`
  width: 270px;
  border-radius: 3px;

  @media (max-width: 730px) {
    width: 100%;
  }
`;

const Link = styled.a`
  text-decoration: underline dashed ${props => props.theme.color.main};
  text-underline-position: under;
`;

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    <Content>
      <div>
        <HighlightParagraph>
          I'm a <Bold>full stack software engineer</Bold> specializing in the
          construction of <Bold>enterprise-grade</Bold> web applications.
        </HighlightParagraph>
        <Paragraph>
          Currently, I'm working as a senior front-end developer at{" "}
          <Link title="Ravelin" href="https://www.ravelin.com">
            Ravelin
          </Link>
          .
        </Paragraph>
        <Paragraph>
          Prior to Ravelin, I spent seven years at{" "}
          <Link title="Pandell" href="https://www.pandell.com">
            Pandell
          </Link>
          . I was the technical lead for Pandell's flagship accounting
          product,{" "}
          <Link title="Pandell JV" href="https://www.pandell.com/energy/pandelljv/">
            Pandell JV
          </Link>
          , and I also worked as a senior developer on the Executive Tools
          team.
        </Paragraph>

        <Paragraph>
          Outside of work, you'll find me{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            title="Travel Map"
            href="https://map.tim-phillips.com/"
          >
            travelling
          </Link>
          ,{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            title="Instagram"
            href="https://www.instagram.com/tim.phillips/"
          >
            taking photos
          </Link>
          ,{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            title="Strava"
            href="https://www.strava.com/athletes/21223598"
          >
            running
          </Link>
          ,{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            title="Goodreads"
            href="https://www.goodreads.com/user/show/13370091-tim"
          >
            reading
          </Link>
          , playing music, or spending time with my{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            title="Alycia Pirmohamed"
            href="https://alycia-pirmohamed.com/"
          >
            partner
          </Link>
          .
        </Paragraph>
      </div>
      <ProfilePic
        fluid={data.profilePic.childImageSharp.fluid}
        alt="Tim Phillips"
      />
    </Content>
  </Layout>
);

export const pageQuery = graphql`
  query {
    profilePic: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
