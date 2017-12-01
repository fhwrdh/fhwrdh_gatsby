import React from 'react';
import Link from 'gatsby-link';
import { Container } from 'react-responsive-grid';

import { rhythm, scale } from '../utils/typography';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <h1
          style={{
            fontWeight: '400',
            ...scale(1.2),
            marginBottom: rhythm(1.0),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
          fhwrdh.net
        </Link>
        </h1>
        {children()}
      </Container>
    );
  }
}

export default Template;
