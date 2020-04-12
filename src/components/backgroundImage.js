import Image from "gatsby-image";
import React from "react";
import styles from "./backgroundImage.module.css";

export const Background = ({ images, background, onChange }) => {
  const imageElements = React.useMemo(() => {
    return images.map(({ name, image }) => (
      <BackgroundImage
        key={name}
        image={image.childImageSharp.fluid}
        opacity={name === background ? 1 : 0}
      ></BackgroundImage>
    ));
  }, [images, background]);

  return (
    <>
      <BackgroundImagePicker
        images={images}
        current={background}
        onChange={onChange}
      />
      {imageElements}
    </>
  );
};

const BackgroundImage = ({ image, opacity }) => (
  <Image
    imgStyle={{ userSelect: "none" }}
    className={styles.backgroundImage}
    fluid={image}
    style={{ position: "absolute", opacity }}
  />
);

const BackgroundImagePicker = ({ images, current, onChange }) => {
  const controls = images.map(({ name }) => {
    return (
      <div key={name} onClick={() => onChange(name)}>
        {name === current ? "Selected" : "Not selected"}
      </div>
    );
  });

  return <>{controls}</>;
};

export default BackgroundImagePicker;
