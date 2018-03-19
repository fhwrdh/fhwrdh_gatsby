import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Container } from 'react-responsive-grid';

import { rhythm, scale } from '../utils/typography';

const Title = styled.h1`
  font-family: 'Titillium Web', san-serif;
  font-weight: 400;
  margin-bottom: ${() => rhythm(1.0)};
  margin-top: 0;
`;

const QuietLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;

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
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <Title style={{ ...scale(1.3) }}>
          <QuietLink to={'/'}>fhwrdh.net</QuietLink>
        </Title>
        {children()}
      </Container>
    );
  }
}

export default Template;
