const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fields: { slug: { regex: "//(jobs|conferences)//" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // List all job offerings
    const edges = result.data.allMarkdownRemark.edges

    edges.forEach((edge, index) => {
      const previous = index === edges.length - 1 ? null : edges[index + 1].node
      const next = index === 0 ? null : edges[index - 1].node
      const slug = (edge.node.fields && edge.node.fields.slug) || ''

      if (/jobs/.test(slug)) {
        var component = path.resolve('./src/templates/jobdetail.tsx')
      } else if (/conferences/.test(slug)) {
        component = path.resolve('./src/templates/congressdetail.tsx')
      } else {
        component = path.resolve('./src/pages/404.tsx')
      }

      createPage({
        path: edge.node.fields.slug,
        component: component,
        context: {
          slug: edge.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
