import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Query, MarkdownRemark } from '../../types/graphql'

export const ConferencesList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { fields: { slug: { regex: "/conferences/" } } }) {
          edges {
            node {
              id
              fields {
                slug
              }
              htmlAst
              frontmatter {
                title
                img
              }
            }
          }
        }
      }
    `}
    render={(data: Query) => (
      <div className="images-flex">
        {data.allMarkdownRemark &&
          data.allMarkdownRemark.edges &&
          data.allMarkdownRemark.edges.map(edge => {
            let node = edge.node as MarkdownRemark
            return (
              <Link key={node.frontmatter!.title} className="image-item" to={node.fields!.slug!}>
                <img src={node.frontmatter!.img} alt={node.frontmatter!.title} />
                <div className="images-text">{node.frontmatter!.title}</div>
              </Link>
            )
          })}
      </div>
    )}
  />
)
