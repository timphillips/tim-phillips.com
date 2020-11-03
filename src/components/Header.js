import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "gatsby";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import styled from "styled-components";

const activeClassName = "link-active";

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  height: 30px;
  margin-bottom: 10px;
`;
const Title = styled.h1`
  border-radius: 4px;
  letter-spacing: 2px;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const StyledHeader = styled.header`
  grid-area: header;
  font-family: ${props => props.theme.font.highlight};
  margin: 0 0 10px 0;
`;

const MenuButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  color: ${props => props.theme.color.main};
  display: none;
  padding: 0;
  cursor: pointer;

  @media (max-width: 730px) {
    display: unset;
  }
`;

const NavLinkListItem = styled.li`
  margin-left: 60px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 730px) {
    margin-left: 0;
  }
`;

const NavArrow = styled.div`
  width: 1px;
  padding-top: 5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${props => props.theme.color.main};
  visibility: hidden;
`;

const StyledNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 2px solid ${props => props.theme.color.main};
  overflow: hidden;
  transition: height 0.4s;

  @media (max-width: 730px) {
    grid-template-rows: auto 45px;
    height: ${props => (props.open ? "87px" : "42px")};
  }
`;

const NavLinks = styled.ol`
  display: flex;
  padding: 0;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  box-shadow: none;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  transition: opacity 0.6s ease 0s;
  align-items: center;

  &.${activeClassName} > ${NavArrow} {
    visibility: unset;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const TitleLink = styled(StyledLink)`
  align-items: flex-start;
`;

const NavLink = ({ children, to }) => (
  <NavLinkListItem>
    <StyledLink activeClassName={activeClassName} to={to}>
      <div>{children}</div>
      <NavArrow />
    </StyledLink>
  </NavLinkListItem>
);

export const Header = ({ toggleTheme }) => {
  const [open, setOpen] = React.useState();

  const links = [
    { label: "about", to: "/about" }
    // { label: "projects", to: "/projects" }
  ];

  return (
    <StyledHeader>
      <ToggleContainer>
        <ThemeToggle onChange={toggleTheme} />
      </ToggleContainer>
      <StyledNav open={open}>
        <TitleLink to="/">
          <Title>Tim Phillips</Title>
        </TitleLink>
        <MenuButton onClick={() => setOpen(!open)}>
          {open ? <AiOutlineCloseCircle size="35" /> : <FiMenu size="35" />}
        </MenuButton>
        <NavLinks open={open}>
          {links.map(({ label, to }) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </NavLinks>
      </StyledNav>
    </StyledHeader>
  );
};
