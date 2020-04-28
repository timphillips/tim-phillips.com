import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import SocialLink from "../components/SocialLink";
import styled from "styled-components";

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 30px;
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
      {social.edges.map(({ node }) => (
        <SocialLink key={node.name} {...node} />
      ))}
    </StyledFooter>
  );
};

export default Footer;
