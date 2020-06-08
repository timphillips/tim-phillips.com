import {
  FaGithub,
  FaGoodreads,
  FaInstagram,
  FaLinkedin,
  FaStrava
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import React from "react";

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
    console.error(`Icon for social link ${iconId} was not found.`);
  }
  return Icon;
};

export const SocialLink = ({ iconId, name, url }) => {
  const Icon = resolveIcon(iconId);
  return (
    <a href={url} rel="noopener noreferrer" target="_blank" title={name}>
      <Icon size={19} />
    </a>
  );
};
