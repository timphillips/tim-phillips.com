import Image from "gatsby-image";
import React from "react";
import styled from "styled-components";

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

export const Background = ({ images, current, onChange }) => {
  const imageElements = React.useMemo(() => {
    return images.map(({ name, image }) => (
      <BackgroundImage
        key={name}
        image={image.childImageSharp.fluid}
        opacity={name === current ? 1 : 0}
      ></BackgroundImage>
    ));
  }, [images, current]);

  return (
    <>
      <BackgroundImagePicker
        images={images}
        current={current}
        onChange={onChange}
      />
      {imageElements}
    </>
  );
};

const BackgroundImage = ({ image, opacity }) => (
  <StyledImage
    imgStyle={{ userSelect: "none" }}
    fluid={image}
    style={{ position: "absolute", opacity }}
  />
);

const StyledUnorderedList = styled.ol`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 100px;
`;

const StyledListItem = styled.li`
  width: 10px;
  height: 10px;
  margin: 1px;
`;

const StyledButton = styled.button`
  border: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid ${props => props.theme.color.main};
  background-color: ${props =>
    props.active ? props.theme.color.main : "rgba(0, 0, 0, 0)"};
`;

const BackgroundImagePicker = ({ images, current, onChange }) => {
  const controls = images.map(({ name }) => {
    console.log(current === name);
    return (
      <StyledListItem key={name}>
        <StyledButton
          active={current === name}
          onClick={() => onChange(name)}
        ></StyledButton>
      </StyledListItem>
    );
  });

  return <StyledUnorderedList>{controls}</StyledUnorderedList>;
};

export default BackgroundImagePicker;
