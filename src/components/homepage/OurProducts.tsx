import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Query, MarkdownRemark } from '../../types/graphql'
import { ZigZagPosition, ZigZagItem } from '../listing/ZigZagItem'
import { Parallax } from 'react-parallax'

export const OurProducts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { fields: { slug: { regex: "/products/" } } }) {
          edges {
            node {
              id
              fields {
                slug
              }
              html
              frontmatter {
                lead
                leadimage
                name
              }
            }
          }
        }
      }
    `}
    render={(data: Query) => (
      <div className="container-bg">
        <Parallax
          bgImage={require('../../../static/images/bg_02.jpg')}
          bgImageAlt="economia photo"
          strength={1000}
        >
          <div className="content-holder">
            <h2>vybrané produkty</h2>
            {data &&
              data.allMarkdownRemark &&
              data.allMarkdownRemark.edges &&
              data.allMarkdownRemark.edges.map((edge, index) => {
                let node = edge.node as MarkdownRemark
                let position = index % 2 === 0 ? ZigZagPosition.LEFT : ZigZagPosition.RIGHT
                return <ZigZagItem key={node.id} node={node} position={position} />
              })}
          </div>
        </Parallax>
      </div>
    )}
  />
)
