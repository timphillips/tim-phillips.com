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

const svgIconsById = {
  email: MdEmail,
  github: FaGithub,
  goodreads: FaGoodreads,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  strava: FaStrava
};

const SocialIconListItem = styled.li`
  padding: 0;
  transition: opacity 0.6s ease 0s;
  display: flex;
  align-items: flex-end;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

const SocialIconLink = styled.a`
  color: ${props => props.theme.color.main};
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
        <Icon size={19} />
      </SocialIconLink>
    </SocialIconListItem>
  );
};

export default SocialLink;
