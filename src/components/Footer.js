import { graphql, useStaticQuery } from "gatsby";

import React from "react";
import SocialLink from "../components/SocialLink";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 1px 0;
  height: 30px;
  align-items: center;
  margin: auto;
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
