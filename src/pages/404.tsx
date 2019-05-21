import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout title="Are you sure?">
        <h2>Toto není stránka, kterou hledáš :(</h2>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
