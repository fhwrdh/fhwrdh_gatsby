import React from 'react';
import profilePic from './fhwrdh.camera.bw.sm.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1 / 2),
          fontFamily: 'Titillium Web, sans-serif',
        }}
      >
        <img
          src={profilePic}
          alt="fhwrdh"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <div>
          <div>
            <strong>Franklin Henderson</strong>
          </div>
          <div>
            <a href="https://twitter.com/fhwrdh">Twitter</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
