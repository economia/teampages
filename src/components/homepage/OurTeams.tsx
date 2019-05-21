import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Query, MarkdownRemark } from '../../types/graphql'
import { ZigZagItem, ZigZagPosition } from '../listing/ZigZagItem'
import { Parallax } from 'react-parallax'

export const OurTeams = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { fields: { slug: { regex: "/teams/" } } }) {
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
          bgImage={require('../../../static/images/meeting.jpg')}
          bgImageAlt="economia photo"
          strength={2000}
        >
          <div className="content-holder">
            <h2>naše týmy</h2>
            {data &&
              data.allMarkdownRemark &&
              data.allMarkdownRemark.edges &&
              data.allMarkdownRemark.edges.map((edge, index) => {
                let node = edge.node as MarkdownRemark
                let position = index % 2 === 0 ? ZigZagPosition.LEFT : ZigZagPosition.RIGHT

                return <ZigZagItem key={node.frontmatter!.name} node={node} position={position} />
              })}
          </div>
        </Parallax>
      </div>
    )}
  />
)
