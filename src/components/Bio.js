import React from 'react';
import styled from 'styled-components';
import profilePic from './fhwrdh.camera.bw.sm.jpg';
import { rhythm } from '../utils/typography';
import { FileDocumentBox, GithubBox, TwitterBox, Camera, LinkedInBox } from '../utils/icons';

const Footer = styled.div`
  display: flex;
  marginBottom: ${rhythm(1 / 2)};
  font-family: Titillium Web, sans-serif;
`;

class Bio extends React.Component {
  render() {
    return (
      <Footer>
        <img
          src={profilePic}
          alt="fhwrdh"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '3px'
          }}
        />
        <div>
          <div>
            <strong>Franklin Henderson</strong>
          </div>
          <div>
            <a href="https://www.github.com/fhwrdh" title="github">
              <GithubBox />
            </a>
            <a href="https://www.twitter.com/fhwrdh" title="twitter">
              <TwitterBox />
            </a>
            <a href="https://www.flickr.com/fhwrdh" title="flickr">
              <Camera />
            </a>
            <a href="http://www.linkedin.com/in/franklinhenderson" title="linked in">
              <LinkedInBox />
            </a>
            <a href="http://resume.fhwrdh.net" title="resume">
              <FileDocumentBox />
            </a>
            { /* <a href="/resume/" title="resume">
              <FileDocumentBox />
            </a>
            */}
          </div>
        </div>
      </Footer>
    );
  }
}

export default Bio;
