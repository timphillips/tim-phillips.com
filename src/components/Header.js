import { graphql, useStaticQuery } from "gatsby";

import { Link } from "gatsby";
import React from "react";
import { opaque } from "../assets/theme";
import styled from "styled-components";

const activeClassName = "link-active";

const Title = styled.h1`
  border-radius: 4px;
  letter-spacing: 2px;
  color: ${props => props.theme.color.main};
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const StyledHeader = styled.header`
  margin-bottom: 15px;
`;

const NavLinkListItem = styled.li`
  list-style: none;
  margin-left: 40px;
  display: flex;
  align-items: flex-end;
`;

const NavArrow = styled.div`
  width: 1px;
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
  font-size: large;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color.main};
  transition: opacity 0.6s ease 0s;
  align-items: center;

  &.${activeClassName} > ${NavArrow} {
    visibility: unset;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const StyledNav = styled.nav`
  max-width: 800px;
  display: flex;
  border-bottom: 3px solid ${props => props.theme.color.main};
  padding: ${props =>
    props.theme === opaque ? "20px 20px 0 20px" : "20px 0 0 0"};
  margin: auto;
  flex: 1;
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.theme === opaque ? "rgba(0, 0, 0, 0.6)" : undefined};
`;

const NavLinks = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
  flex: 1;
`;

// const SocialLinks = styled.div`
//   display: flex;
//   padding: 0;
//   margin: 0;
// `;

const NavLink = ({ children, state, to }) => (
  <NavLinkListItem>
    <StyledLink activeClassName={activeClassName} to={to} state={state}>
      <div>{children}</div>
      <NavArrow />
    </StyledLink>
  </NavLinkListItem>
);

const Header = ({ state }) => {
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
    <StyledHeader>
      <StyledNav>
        <StyledLink to="/" state={state}>
          <Title>Tim Phillips</Title>
        </StyledLink>
        <NavLinks>
          <NavLink to="/about" state={state}>
            about
          </NavLink>
          <NavLink to="/blog" state={state}>
            notes
          </NavLink>
          <NavLink to="/projects" state={state}>
            projects
          </NavLink>
        </NavLinks>
        {/* <SocialLinks>
          {social.edges.map(({ node }) => (
            <SocialLink key={node.name} {...node} />
          ))}
        </SocialLinks> */}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
