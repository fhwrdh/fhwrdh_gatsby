import React from 'react';
import styled from 'styled-components';
import profilePic from './fhwrdh.camera.bw.sm.jpg';
import { rhythm } from '../utils/typography';
import { GithubBox, TwitterBox, Camera, LinkedInBox } from '../utils/icons';

const Footer = styled.div`
  display: flex;
  marginBottom: ${rhythm(1 / 2)};
  font-family: Titillium Web, sans-serif;
`;

const FooterText = styled.div`
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
        <FooterText>
          <div>
            <strong>Franklin Henderson</strong>
          </div>
          <div>
            <a href="https://www.flickr.com/fhwrdh">
              <Camera />
            </a>
            <a href="https://www.twitter.com/fhwrdh">
              <TwitterBox />
            </a>
            <a href="https://www.github.com/fhwrdh">
              <GithubBox />
            </a>
            <a href="http://www.linkedin.com/in/franklinhenderson">
              <LinkedInBox />
            </a>
          </div>
        </FooterText>
      </Footer>
    );
  }
}

export default Bio;
