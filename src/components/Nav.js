import { Link } from "gatsby"
import React from "react"
import cx from "classnames"
import styles from "./Nav.module.css"

const NavLink = ({ children, theme, to }) => (
  <Link
    className={cx(
      styles.navLink,
      theme === "light" ? styles.navLink_light : styles.navLink_dark
    )}
    to={to}
  >
    {children}
  </Link>
)

const Nav = ({ theme }) => {
  return (
    <nav
      className={cx(
        styles.nav,
        theme === "light" ? styles.nav_light : styles.nav_dark
      )}
    >
      <div></div>
      <NavLink theme={theme} to="/">
        About
      </NavLink>
      <NavLink theme={theme} to="/blog">
        Blog
      </NavLink>
      <NavLink theme={theme} to="/projects">
        Projects
      </NavLink>
    </nav>
  )
}

export default Nav
