import Image from "gatsby-image";
import React from "react";
import styled from "styled-components";

const BackgroundImage = styled(Image)`
  position: fixed;
  top: ${props => (props.imageStyle === "inset" ? `200px` : "30px")};
  left: 30px;
  width: calc(100% - 60px);
  height: calc(
    100% - ${props => (props.imageStyle === "inset" ? `${300}px` : "60px")}
  );
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

export const Background = ({ images, current }) => {
  return (
    <div>
      {images.map(({ name, image, style, position }) => (
        <BackgroundImage
          key={name}
          imageStyle={style}
          fluid={image.childImageSharp.fluid}
          style={{ position: "fixed", opacity: name === current ? 1 : 0 }}
          imgStyle={{
            userSelect: "none",
            objectPosition: position || "center 30%"
          }}
        />
      ))}
    </div>
  );
};

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
  border: 3px solid ${props => props.theme.color.main};
  background-color: ${props =>
    props.active ? props.theme.color.main : "rgba(0, 0, 0, 0)"};
`;

export const BackgroundImagePicker = ({ images, current, onChange }) => {
  const controls = images.map(({ name }) => (
    <StyledListItem key={name}>
      <StyledButton active={current === name} onClick={() => onChange(name)} />
    </StyledListItem>
  ));

  return <StyledUnorderedList>{controls}</StyledUnorderedList>;
};

export default BackgroundImagePicker;
