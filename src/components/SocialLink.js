import {
  FaGithub,
  FaGoodreads,
  FaInstagram,
  FaLinkedin,
  FaStrava
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import React from "react";
import styled from "styled-components";

const SocialIconListItem = styled.li`
  padding: 0;
  display: flex;
  align-items: flex-end;
  opacity: 0.5;
  transition: opacity 0.6s ease 0s;

  &:hover {
    opacity: 1;
  }
`;

const svgIconsById = {
  email: MdEmail,
  github: FaGithub,
  goodreads: FaGoodreads,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  strava: FaStrava
};

const resolveIcon = iconId => {
  const Icon = svgIconsById[iconId];
  if (!Icon) {
    console.error(`Icon for ${iconId} was not found.`);
  }
  return Icon;
};

export const SocialLink = ({ iconId, name, url }) => {
  const Icon = resolveIcon(iconId);
  return (
    <SocialIconListItem>
      <a href={url} rel="noopener noreferrer" target="_blank" title={name}>
        <Icon size={19} />
      </a>
    </SocialIconListItem>
  );
};
