import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import { SocialLink } from "../components/SocialLink";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: footer;
  margin: 25px 0;
`;

const SocialLinksList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 300px;
`;

const SocialLinkListItem = styled.li`
  opacity: 0.5;
  transition: opacity 0.6s ease 0s;

  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  const { social } = useStaticQuery(graphql`
    query {
      social: allSocialYaml {
        edges {
          node {
            name
            iconId
            url
          }
        }
      }
    }
  `);

  return (
    <StyledFooter>
      <SocialLinksList>
        {social.edges.map(({ node }) => (
          <SocialLinkListItem key={node.name}>
            <SocialLink {...node} />
          </SocialLinkListItem>
        ))}
      </SocialLinksList>
    </StyledFooter>
  );
};

export default Footer;
