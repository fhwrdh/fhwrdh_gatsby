import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Container } from 'react-responsive-grid';
import { rhythm, scale } from '../utils/typography';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  align-items: flex-end;
  color: #585858;
`;

const Title = styled.div`
  font-family: 'Titillium Web', san-serif;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
  border-bottom: 0;
  padding-bottom: 0;
`;

const Icons = styled.div`
  display:flex;
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

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <Header>
          <Title style={{ ...scale(1.3) }}>
            <QuietLink to={'/'}>fhwrdh.net</QuietLink>
          </Title>
        </Header>
        {children()}
      </Container>
    );
  }
}

export default Template;
