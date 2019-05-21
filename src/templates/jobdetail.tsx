import React from 'react'
import { graphql, Link } from 'gatsby'
import { Query } from '../types/graphql'
import Layout from '../components/Layout'

interface Propsiky {
  data: Query
}

const JobDetail = (props: Propsiky) => {
  return (
    <Layout className="job-offer" title={props.data.markdownRemark!.frontmatter!.title}>
      <div className="header-image-holder">
        <div className="header-links">
          <Link className="home-link" to="/career">
            &lt; Pracovní pozice
          </Link>
          <p className="header-date">
            Publikováno dne: {props.data.markdownRemark!.frontmatter!.date}
          </p>
        </div>
        <h1 id="header-text">{'#' + props.data.markdownRemark!.frontmatter!.title}</h1>
      </div>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark!.html! }} />
    </Layout>
  )
}

export default JobDetail

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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
