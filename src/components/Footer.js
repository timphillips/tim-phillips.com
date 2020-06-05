import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import { SocialLink } from "../components/SocialLink";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 25px 0;
`;

const SocialLinks = styled.ul`
  flex: 1;
  display: flex;
  justify-content: space-between;
  max-width: 300px;
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
      <SocialLinks>
        {social.edges.map(({ node }) => (
          <SocialLink key={node.name} {...node} />
        ))}
      </SocialLinks>
    </StyledFooter>
  );
};

export default Footer;
