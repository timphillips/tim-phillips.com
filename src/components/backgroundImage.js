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

const BackgroundImagePicker = ({ images, current, onChange }) => {
  const controls = images.map(({ name }) => {
    return (
      <button key={name} onClick={() => onChange(name)}>
        {name === current ? "Selected" : "Not selected"}
      </button>
    );
  });

  return <>{controls}</>;
};

export default BackgroundImagePicker;
