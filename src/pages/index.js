import BackgroundImage from "../components/backgroundImage"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import React from "react"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styles from "./index.module.css"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <Nav theme="light" />

        <h1 className={styles.title}>Tim Phillips</h1>
        <h2 className={styles.subtitle}>full stack software developer</h2>
        <BackgroundImage image={data.backgroundImage.childImageSharp.fluid} />
      </Layout>
    </>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
