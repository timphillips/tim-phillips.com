import Image from "gatsby-image"
import React from "react"
import styles from "./backgroundImage.module.css"

const BackgroundImage = ({ image }) => {
  return (
    <Image
      imgStyle={{ userSelect: "none" }}
      className={styles.backgroundImage}
      fluid={image}
      style={{ position: "absolute" }}
    />
  )
}

export default BackgroundImage
