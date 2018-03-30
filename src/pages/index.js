import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Bio from '../components/Bio';
import { rhythm } from '../utils/typography';

const Row = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  align-items: flex-end;
  justify-content: space-between;
  font-family: 'Titillium Web', sans-serif;
`;
const H3 = styled.h3`
  font-family: 'Titillium Web', sans-serif;
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    const nonDrafts =
      process.env.NODE_ENV === 'production'
        ? posts.filter(p => !p.node.frontmatter.draft)
        : posts;

    // console.log('posts: ', posts);
    // console.log('nonDrafts: ', nonDrafts);

    return (
      <div>
        <Helmet title={siteTitle} />
        {nonDrafts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug;
          return (
            <Row key={node.fields.slug}>
              <H3 style={{ marginBottom: rhythm(1 / 4) }}>
                <Link
                  style={{ boxShadow: 'none', textDecoration: 'none' }}
                  to={node.fields.slug}
                >
                  {title}
                </Link>
              </H3>
              <small>{node.frontmatter.date}</small>
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
