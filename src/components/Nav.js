import {
  FaGithub,
  FaGoodreads,
  FaInstagram,
  FaLinkedin,
  FaStrava,
} from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

import { Link } from "gatsby"
import React from "react"
import cx from "classnames"
import styles from "./Nav.module.css"

const iconSize = 24

const svgIconsById = {
  github: FaGithub,
  goodreads: FaGoodreads,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  strava: FaStrava,
}

const SocialIcon = ({ iconId, name, link }) => {
  const Icon = svgIconsById[iconId]
  return (
    <li className={styles.socialLinkListItem}>
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        title={name}
        className={styles.socialIcon}
      >
        <Icon size={24} />
      </a>
    </li>
  )
}

const NavLink = ({ children, theme, to }) => (
  <li className={styles.navLinkListItem}>
    <Link
      activeClassName={styles.navLink_active}
      className={cx(
        styles.navLink,
        theme === "light" ? styles.navLink_light : styles.navLink_dark
      )}
      to={to}
    >
      <div>{children}</div>
      <div className={styles.navArrow} />
    </Link>
  </li>
)

const Nav = ({ theme }) => {
  const { social } = useStaticQuery(graphql`
    query {
      social: allSocialYaml {
        edges {
          node {
            id
            name
            iconId
            link
          }
        }
      }
    }
  `)

  return (
    <nav
      className={cx(
        styles.nav,
        theme === "light" ? styles.nav_light : styles.nav_dark
      )}
    >
      <ol className={styles.navLinks}>
        <NavLink theme={theme} to="/">
          home
        </NavLink>
        <NavLink theme={theme} to="/about">
          about
        </NavLink>
        <NavLink theme={theme} to="/blog">
          blog
        </NavLink>
        <NavLink theme={theme} to="/projects">
          projects
        </NavLink>
      </ol>
      <ul className={styles.socialLinks}>
        {social.edges.map(({ node }) => (
          <SocialIcon key={node.name} {...node} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav
