import { LargerParagraph, Paragraph } from "../components/Paragraph";

import Image from "gatsby-image";
import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import styled from "styled-components";

const Content = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4em;
  margin: 75px 0;

  @media (max-width: 730px) {
    grid-template-columns: 1fr;
  }
`;

const Highlight = styled.span`
  font-weight: 700;
`;

const ProfilePic = styled(Image)`
  width: 270px;
  border-radius: 3px;

  @media (max-width: 730px) {
    width: 100%;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.color.main};
  text-decoration: underline dashed ${props => props.theme.color.main};
  text-underline-position: under;
`;

const AboutPage = ({ data }) => (
  <Layout theme="dark">
    <SEO title="About" />
    <Content>
      <div>
        <LargerParagraph>
          I'm a <Highlight>full stack software developer</Highlight>{" "}
          specializing in the construction of{" "}
          <Highlight>enterprise-grade</Highlight> web applications.
        </LargerParagraph>
        <Paragraph>
          Currently, I'm working as a senior developer on the{" "}
          <Highlight>Executive Tools</Highlight> team at{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            title="Pandell"
            href="https://www.pandell.com"
          >
            Pandell
          </Link>
          . Prior to that, I spent a number of years as the technical lead for
          Pandell's flagship accounting product,{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            title="Pandell JV"
            href="https://www.pandelljv.com/"
          >
            Pandell JV
          </Link>
          .
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
        fluid(maxWidth: 4000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
