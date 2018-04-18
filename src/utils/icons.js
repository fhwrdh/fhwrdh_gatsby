import styled from 'styled-components';
import { TwitterBoxIcon, GithubBoxIcon, CameraIcon, LinkedinBoxIcon } from 'mdi-react';

const wrapIcon = icon => styled(icon)`
  margin-right: 5px;
  width: 24px;
  height: 24px;
`;

const Camera = wrapIcon(CameraIcon);
const GithubBox = wrapIcon(GithubBoxIcon);
const LinkedInBox = wrapIcon(LinkedinBoxIcon);
const TwitterBox = wrapIcon(TwitterBoxIcon);


export {
  Camera,
  GithubBox,
  LinkedInBox,
  TwitterBox,
};
