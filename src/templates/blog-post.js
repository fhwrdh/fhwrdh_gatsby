import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import styled from 'styled-components';
import * as R from 'ramda';

import Bio from '../components/Bio';
import { rhythm, scale } from '../utils/typography';
import { Tags } from '../components/Tags';

const Title = styled.h1`
  margin-top: 0;
  border-bottom: 0;
`;

const DraftSpan = styled.span`
  color: red;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    console.log('post.frontmatter: ', post.frontmatter);

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Title>
          {post.frontmatter.title}
          <DraftSpan>{post.frontmatter.draft ? ' DRAFT' : ''}</DraftSpan>
        </Title>
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Tags tags={post.frontmatter.tags} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        draft
        tags
      }
    }
  }
`;
