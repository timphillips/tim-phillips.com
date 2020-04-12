import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby";
import React from "react";
import SocialLink from "./SocialLink";
import styled from "styled-components";

const activeClassName = "link-active";

const NavLinkListItem = styled.li`
  list-style: none;
  padding: 0;
`;

const NavArrow = styled.div`
  padding-top: 5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${props => props.theme.color.main};
  color: ${props => props.theme.color.main};
  visibility: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  margin: 0px 30px;
  font-size: larger;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.color.main};

  &:first-of-type {
    margin-left: 0;
  }

  &.${activeClassName} > ${NavArrow} {
    visibility: unset;
  }
`;

const StyledNav = styled.nav`
  border-bottom: 3px solid ${props => props.theme.color.main};
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
`;

const NavLink = ({ children, theme, to }) => (
  <NavLinkListItem>
    <StyledLink activeClassName={activeClassName} to={to}>
      <div>{children}</div>
      <NavArrow />
    </StyledLink>
  </NavLinkListItem>
);

const Nav = ({ theme }) => {
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
    <StyledNav>
      <NavLinks>
        <NavLink theme={theme} to="/">
          home
        </NavLink>
        <NavLink theme={theme} to="/about">
          about
        </NavLink>
        <NavLink theme={theme} to="/blog">
          blog
        </NavLink>
        <NavLink theme={theme} to="/projects">
          projects
        </NavLink>
      </NavLinks>
      <SocialLinks>
        {social.edges.map(({ node }) => (
          <SocialLink key={node.name} {...node} />
        ))}
      </SocialLinks>
    </StyledNav>
  );
};

export default Nav;
