import Image from "gatsby-image";
import React from "react";
import styled from "styled-components";

const StyledImage = styled(Image)`
  position: fixed;
  top: 30px;
  left: 30px;
  background: linear-gradient(
    to right,
    rgb(178, 203, 233) 0%,
    rgb(132, 161, 201) 100%
  );
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const StyledDiv = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    rgb(178, 203, 233) 0%,
    rgb(132, 161, 201) 100%
  );
  top: 30px;
  left: 30px;
  z-index: -1;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
`;

export const Background = ({
  images,
  current,
  onChange,
  useColor,
  imageStyle
}) => {
  const imageElements = React.useMemo(
    () =>
      images.map(({ name, image }) => (
        <BackgroundImage
          key={name}
          image={image.childImageSharp.fluid}
          imageStyle={imageStyle}
          opacity={name === current ? 1 : 0}
        ></BackgroundImage>
      )),
    [images, current]
  );

  return (
    <>
      {/* <BackgroundImagePicker
        images={images}
        current={current}
        onChange={onChange}
      /> */}
      {imageElements}
    </>
  );
};

const BackgroundImage = ({ image, opacity, imageStyle }) => (
  <StyledImage
    imgStyle={{ userSelect: "none" }}
    fluid={image}
    style={{ position: "fixed", opacity }}
    imgStyle={{ objectPosition: "center 30%", ...imageStyle }}
  />
);

const StyledUnorderedList = styled.ol`
  margin-top: 10px;
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  max-width: 80px;
`;

const StyledListItem = styled.li`
  width: 20px;
  height: 20px;
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

export const BackgroundImagePicker = ({ images, current, onChange }) => {
  const controls = images.map(({ name }) => (
    <StyledListItem key={name}>
      <StyledButton
        active={current === name}
        onClick={() => onChange(name)}
      ></StyledButton>
    </StyledListItem>
  ));

  return <StyledUnorderedList>{controls}</StyledUnorderedList>;
};

export default BackgroundImagePicker;
