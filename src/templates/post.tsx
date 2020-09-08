import React, { FC } from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface DataProps {
  markdownRemark: {
    html: string
    frontmatter: {
      title: string
      author?: string
      date?: string
    }
  }
}

const Post: FC<PageProps<DataProps>> = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <h4>
        {`Posted by : ${post.frontmatter.author} on ${post.frontmatter.date}`}
      </h4>
      <br />
      {/* eslint-disable-next-line */}
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date
        title
        author
      }
    }
  }
`

export default Post
