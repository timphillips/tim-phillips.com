import * as React from "react";

import "./App.css";

const Links = () => {
  const links = [
    {
      id: "github",
      image: "github.png",
      name: "GitHub",
      url: "https://www.github.com/timphillips/"
    },
    {
      id: "goodreads",
      image: "goodreads.png",
      name: "Goodreads",
      url: "https://www.goodreads.com/user/show/13370091-tim"
    },
    {
      id: "instagram",
      image: "instagram.png",
      name: "Instagram",
      url: "https://www.instagram.com/tim.phillips/"
    },
    {
      id: "linkedIn",
      image: "linkedin.png",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tim-phillips-82935423/"
    },
    /*{
      id: "photography",
      image: "photography.png",
      name: "Photography",
      url: "https://photos.app.goo.gl/S4ZkHKrdD93eygcd2/"
    },*/
    {
      id: "twitter",
      image: "twitter.png",
      name: "Twitter",
      url: "https://twitter.com/tim___phillips/"
    },
    {
      id: "travelLog",
      image: "travel.png",
      name: "Travel Log",
      url: "http://map.tim-phillips.com"
    }
  ];
  const linkElements = links.map(link => (
    <li key={link.id}>
      <a href={link.url} target="_blank" title={link.name}>
        <img className="linkIcon" alt={link.name} src={link.image} />
      </a>
    </li>
  ));

  return <ul className="linkContainer">{linkElements}</ul>;
};

const App = () => (
  <>
    <header className="header">
      <h1 className="header__title">Tim Phillips</h1>
      <h3 className="header__subtitle">full-stack software developer</h3>
      <Links />
    </header>
  </>
);

export default App;
