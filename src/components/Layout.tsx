import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import '../styles/global.less'
import * as logo from '../../static/assets/economia-logo.png'
import * as motiv from '../../static/assets/economia-motiv.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface Propsiky {
  title?: string
  className?: string
}

const Layout = (props: Propsiky & { children?: ReactNode }) => {
  return (
    <div className="container">
      <Helmet>{props.title && <title>{props.title}</title>}</Helmet>
      <header className="closed">
        <a href="https://economia.cz" target="_blank">
          <img className="logo" src={logo} alt="E.conomia" />
        </a>
        <div className="menu">
          <AnchorLink href="#tymy">naše týmy</AnchorLink>
          <AnchorLink href="#technologie">technologie</AnchorLink>
          <AnchorLink href="#aboutus">jak to u nás chodí</AnchorLink>
        </div>
        <div className="mobileButton" />
      </header>
      <div className={`content ${props.className || ''}`}>{props.children}</div>
      <footer>
        <div className="content-holder">
          <a href="https://economia.cz" target="_blank">
            <img className="logo-bottom" src={motiv} alt="E.conomia" />
          </a>
          <p>
            Copyright &copy; 2019 Economia, a.s.
            <br />
            Economia, a.s.
            <br />
            Pernerova 673/47, 186 00, Praha 8
            <br />
            T. +420 233 071 111
            <br />
            F. +420 224 800 370
            <br />
            <a href="mailto:economia@economia.cz">economia@economia.cz</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
