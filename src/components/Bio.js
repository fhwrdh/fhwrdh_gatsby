import React from 'react';

// Import typefaces
import 'typeface-montserrat';
import 'typeface-merriweather';

import profilePic from './fhwrdh.camera.bw.sm.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1 / 2),
        }}
      >
        <img
          src={profilePic}
          alt='fhwrdh'
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          <strong>Franklin Henderson</strong>
          <br />
          <a href="https://twitter.com/fhwrdh">Twitter</a>
        </p>
      </div>
    );
  }
}

export default Bio;
