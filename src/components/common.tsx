import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <header className="header">
    <Link to="/">
      <h1 className="header__title">Tim Phillips</h1>
    </Link>
  </header>
);

export const Footer = () => (
  <footer>
    Tim Phillips {new Date().getFullYear()}
    <br />
    Edinburgh, Scotland
  </footer>
);
