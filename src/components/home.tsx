import * as React from "react";
import { Link } from "react-router-dom";

const SocialLink = (props: { name: string; url: string }) => (
  <a className="home__link" href={props.url} target="_blank" rel="noopener">
    <span>{props.name}</span>
  </a>
);

const SocialLinks = () => {
  const links = [
    {
      id: "github",
      name: "GitHub",
      url: "https://www.instagram.com/tim.phillips/"
    },
    {
      id: "goodreads",
      name: "Goodreads",
      url: "https://www.goodreads.com/user/show/13370091-tim"
    },
    {
      id: "instragram",
      name: "Instragram",
      url: "https://www.instagram.com/tim.phillips/"
    },
    {
      id: "linkedIn",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tim-phillips-82935423/"
    },
    {
      id: "photography",
      name: "Photography",
      url: "https://photos.app.goo.gl/S4ZkHKrdD93eygcd2/"
    },
    {
      id: "travel",
      name: "Travel",
      url: "http://map.tim-phillips.com/"
    },
    {
      id: "twitter",
      name: "Twitter",
      url: "https://twitter.com/tim___phillips/"
    }
  ];
  const linkElements = links.map(link => (
    <li key={link.id}>
      <SocialLink name={link.name} url={link.url} />
    </li>
  ));

  return <ul className="home__sectionList">{linkElements}</ul>;
};

export const Home = () => (
  <div>
    <section className="home__section">
      <p>I'm a full-stack software developer who builds web applications.</p>
      <p>
        View my résumé{" "}
        <Link to="/resume" className="home__link">
          here
        </Link>.
      </p>
    </section>

    <section className="home__section">
      <p>Find me online:</p>
      <SocialLinks />
    </section>
  </div>
);
