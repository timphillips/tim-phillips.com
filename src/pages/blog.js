import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import styled from "styled-components";

const Content = styled.section`
  margin-top: 75px;
`;

const StyledArticle = styled.article``;

const Date = styled.time`
  font-size: 0.875rem;
  color: rgba(55, 71, 79, 0.4);
  font-weight: 600;
  text-transform: uppercase;
  padding-bottom: 30px;
`;

const PostTitle = styled.h3`
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: none;
`;

const PostTitleLink = styled(Link)`
  color: #37474f;
  text-decoration: none;
  font-size: large;
  text-underline-position: under;

  &:hover {
    text-decoration: underline dashed ${props => props.theme.color.main};
  }
`;

const PostExerpt = styled.p``;

const StyledSection = styled.section`
  padding-bottom: 20px;
`;

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout theme="dark">
      <SEO title="All posts" />
      <Content>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <StyledArticle key={node.fields.slug}>
              <header>
                <Date>{node.frontmatter.date}</Date>
                <PostTitle>
                  <PostTitleLink to={node.fields.slug}>{title}</PostTitleLink>
                </PostTitle>
              </header>
              <StyledSection>
                <PostExerpt
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description
                  }}
                />
              </StyledSection>
            </StyledArticle>
          );
        })}
      </Content>
    </Layout>
  );
};

export default BlogPage;

export const pageQuery = graphql`
  query {
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
