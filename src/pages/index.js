import React from 'react';
import GatsbyLink from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Bio from '../components/Bio';
import { rhythm } from '../utils/typography';

const Link = styled(GatsbyLink)`
  box-shadow: none;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  align-items: flex-end;
  justify-content: space-between;
  font-family: 'Titillium Web', sans-serif;
`;

const H3 = styled.h3`
  font-family: 'Titillium Web', sans-serif;
  margin-bottom: ${rhythm(1 / 4)};
`;

const Date = styled.small`
  display: inline-block;
  white-space: nowrap;
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    const nonDrafts =
      process.env.NODE_ENV === 'production'
        ? posts.filter(p => !p.node.frontmatter.draft)
        : posts;

    return (
      <div>
        <Helmet title={siteTitle} />
        {nonDrafts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <Row key={node.fields.slug}>
              <H3>
                <Link to={node.fields.slug}>{title}</Link>
              </H3>
              <Date>{node.frontmatter.date}</Date>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
            draft
            tags
          }
        }
      }
    }
  }
`;
