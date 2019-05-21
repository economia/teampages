import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Query } from '../types/graphql'
import Pepa from '../../static/images/pepa.jpg'

interface BlogIndexProps {
  data: Query
}

const BlogIndex = (props: BlogIndexProps) => {
  return (
    <Layout title="Economia">
      <div className="header-image-holder">
        <div className="header-links">
          <Link className="home-link" to="/">
            &lt; Domů
          </Link>
        </div>
        <h1>#Volné pozice v IT</h1>
      </div>
      <div className="job-blok">
        {props.data.allMarkdownRemark!.edges!.map(edge => {
          return (
            <Link
              key={edge.node!.fields!.slug!}
              to={edge.node!.fields!.slug! + '#header-text'}
              className="item job-item"
            >
              <h3 className="job-header">{edge.node!.frontmatter!.title}</h3>
              <p className="career-date">Publikováno {edge.node!.frontmatter!.date}</p>
              <p>{edge.node!.excerpt}</p>
            </Link>
          )
        })}
      </div>
      <div className="container-white">
        <div className="avatar-flex">
          <div className="avatar-flex-image hp-left-image">
            <img src={Pepa} alt="" />
            <p>Josef Jadrný</p>
            <p>šéf IT</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed ut consectetuer adipiscing
            elit. Sed ut
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { regex: "//jobs//" } } }) {
      edges {
        node {
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
