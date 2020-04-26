import { Link } from "gatsby";
import React from "react";
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
  font-family: "Quando", serif;
  margin: 60px 0 10px 0;
  display: flex;
`;

const NavLinkListItem = styled.li`
  list-style: none;
  margin-left: 60px;
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

  @media (max-width: 600px) {
    display: none;
  }
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
  display: flex;
  border-bottom: 3px solid ${props => props.theme.color.main};
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  display: flex;
  padding: 0;
  justify-content: flex-end;
  flex: 1;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const NavLink = ({ children, state, to }) => (
  <NavLinkListItem>
    <StyledLink activeClassName={activeClassName} to={to} state={state}>
      <div>{children}</div>
      <NavArrow />
    </StyledLink>
  </NavLinkListItem>
);

const Header = ({ state }) => {
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
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
