import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import RehypeReact from 'rehype-react'
import { Query } from '../types/graphql'
import { Parallax } from 'react-parallax'
import { GalleryCongress } from './GalleryCongress';

// Partial blocks

const Content = (props: any) => {
  return <div>{props.children}</div>
}

const Presenters = (props: any) => {
  return (
    <div>
      <h2>přednášející</h2>
      <div className="congress-images-flex">{props.children}</div>
    </div>
  )
}

const Presenter = (props: { name: string; team: string; image: string }) => {
  return (
    <div className="avatar-flex-image">
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.team}</p>
    </div>
  )
}

const Gallery = (props: any) => {
  return (
    <div className="container-white">
      <h2>foto z konferencí</h2>
      <div className="images-flex">{props.children}</div>
    </div>
  )
}

const GalleryItem = (props: { name?: string; src?: string }) => {
  return (
    <div className="image-item">
      <img src={props.src} alt={props.name} />
      <div className="images-text">{props.name}</div>
    </div>
  )
}

// Rnder service

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    content: Content,
    presenter: Presenters,
    'presenter-item': Presenter,
    gallery: Gallery,
    'gallery-item': GalleryItem,
  },
}).Compiler

// Page itself

const CongressDetail = (props: { data: Query }) => {
  return (
    <Layout className="congress">
      <div className="header-image-holder">
        <Parallax
          bgImage={require('../../static/images/main-image-02.jpg')}
          bgImageAlt="our photo"
          strength={150}
        >
          <div className="header-image-content">
            <div className="header-links">
              <Link className="home-link" to="/">
                &lt; Domů
              </Link>
            </div>
            <h1 id="header-text">#Webexpo</h1>
          </div>
        </Parallax>
      </div>
      {props.data &&
        props.data.markdownRemark &&
        props.data.markdownRemark.htmlAst &&
        renderAst(props.data.markdownRemark.htmlAst)}
      <GalleryCongress />
    </Layout>
  )
}

export default CongressDetail

export const pageQuery = graphql`
  query CongressQuery($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        title
        date
      }
    }
  }
`
