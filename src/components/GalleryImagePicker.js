import React from "react";
import styled from "styled-components";

const StyledUnorderedList = styled.ol`
  display: flex;
  justify-content: flex-start;
`;

const StyledListItem = styled.li`
  margin-right: 8px;
`;

const StyledButton = styled.button`
  height: 18px;
  width: 18px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid ${props => props.theme.color.main};
  background-color: ${props =>
    props.active ? props.theme.color.main : "transparent"};
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props =>
      props.active ? props.theme.color.main : props.theme.color.hover};
  }
`;

export const GalleryImagePicker = ({ imageIds, currentId, onChange }) => (
  <StyledUnorderedList>
    {imageIds.map(id => (
      <StyledListItem key={id}>
        <StyledButton
          active={currentId === id}
          onClick={() => onChange(id)}
          aria-label={`Set gallery image to ${id}`}
        />
      </StyledListItem>
    ))}
  </StyledUnorderedList>
);
