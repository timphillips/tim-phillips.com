import {
  FaGithub,
  FaGoodreads,
  FaInstagram,
  FaLinkedin,
  FaStrava
} from "react-icons/fa";

import React from "react";
import styled from "styled-components";

const svgIconsById = {
  github: FaGithub,
  goodreads: FaGoodreads,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  strava: FaStrava
};

const SocialIconListItem = styled.li`
  list-style: none;
  padding: 0;
  margin-bottom: 10px;
  transition: opacity 0.6s ease 0s;
  display: flex;
  align-items: flex-end;

  &:hover {
    opacity: 0.6;
  }
`;

const SocialIconLink = styled.a`
  color: ${props => props.theme.color.main};
  margin-left: 10px;
`;

const SocialLink = ({ iconId, name, url }) => {
  const Icon = svgIconsById[iconId];
  return (
    <SocialIconListItem>
      <SocialIconLink
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        title={name}
      >
        <Icon size={24} />
      </SocialIconLink>
    </SocialIconListItem>
  );
};

export default SocialLink;
