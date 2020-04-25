import { LargerParagraph, Paragraph } from "../components/Paragraph";

import Image from "gatsby-image";
import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import styled from "styled-components";

const Content = styled.section`
  font-family: "Quando", serif;
  margin-top: 75px;
  max-width: 800px;
  color: ${props => props.theme.color.main};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4em;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Bold = styled.span`
  font-weight: 700;
`;

const ProfilePic = styled(Image)`
  width: 270px;
  border-radius: 2px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const LinkText = styled.span`
  color: ${props => props.theme.color.main};
  text-decoration: underline dashed ${props => props.theme.color.main};
  text-underline-position: under;
`;

const AboutPage = ({ data, location }) => {
  return (
    <Layout location={location} theme="dark">
      <SEO title="About" />
      <Content>
        <div>
          <LargerParagraph>
            I'm a <Bold>full stack software developer</Bold> specializing in the
            construction of <Bold>enterprise-grade</Bold> web applications.
          </LargerParagraph>
          <Paragraph>
            Currently, I'm working as a senior developer on the{" "}
            <Bold>Executive Tools</Bold> team at{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              title="Pandell"
              href="https://www.pandell.com"
            >
              <LinkText>Pandell</LinkText>
            </Link>
            . Prior to that, I spent a number of years as the technical lead for
            Pandell's flagship accounting product,{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              title="Pandell JV"
              href="http://www.pandelljv.com/"
            >
              <LinkText>Pandell JV</LinkText>
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
              <LinkText>travelling</LinkText>
            </Link>
            ,{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              title="Instagram"
              href="https://www.instagram.com/tim.phillips/"
            >
              <LinkText>photography-ing</LinkText>
            </Link>
            ,{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              title="Strava"
              href="https://www.strava.com/athletes/21223598"
            >
              <LinkText>running</LinkText>
            </Link>
            ,{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              title="Goodreads"
              href="https://www.goodreads.com/user/show/13370091-tim"
            >
              <LinkText>reading</LinkText>
            </Link>
            , playing music, or spending time with my{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              title="Goodreads"
              href="http://alycia-pirmohamed.com/"
            >
              <LinkText>partner</LinkText>
            </Link>
            .
          </Paragraph>
        </div>
        <ProfilePic fluid={data.profilePic.childImageSharp.fluid} alt="Tim" />
      </Content>
    </Layout>
  );
};

export default AboutPage;

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
