import styled from 'styled-components';
import { FileDocumentBoxIcon, TwitterBoxIcon, GithubBoxIcon, CameraIcon, LinkedinBoxIcon } from 'mdi-react';

const wrapIcon = icon => styled(icon)`
  margin-right: 5px;
  width: 24px;
  height: 24px;
`;

const Camera = wrapIcon(CameraIcon);
const FileDocumentBox = wrapIcon(FileDocumentBoxIcon);
const GithubBox = wrapIcon(GithubBoxIcon);
const LinkedInBox = wrapIcon(LinkedinBoxIcon);
const TwitterBox = wrapIcon(TwitterBoxIcon);


export {
  Camera,
  FileDocumentBox,
  GithubBox,
  LinkedInBox,
  TwitterBox,
};
