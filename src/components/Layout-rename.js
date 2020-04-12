import React from "react";

const Layout = ({ children }) => {
  let header;

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        fontFamily: ["Quando", "serif"],
        maxWidth: 1200,
        paddingLeft: 30,
        paddingRight: 30
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </div>
  );
};

export default Layout;
