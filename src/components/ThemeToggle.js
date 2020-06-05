import { FiMoon, FiSun } from "react-icons/fi";
import styled, { ThemeContext } from "styled-components";

import React from "react";

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  outline: none;
`;

export const ThemeToggle = ({ onChange }) => {
  const theme = React.useContext(ThemeContext);
  const Icon = theme && theme.id === "light" ? FiMoon : FiSun;
  return (
    <ToggleButton onClick={onChange} aria-label="Toggle theme">
      <Icon size="23"></Icon>
    </ToggleButton>
  );
};
