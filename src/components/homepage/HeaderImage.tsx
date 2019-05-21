import React from 'react'
import { Parallax } from 'react-parallax'

export const HeaderImage = (props: { text?: string }) => (
  <div className="header-image-holder">
    <Parallax
      bgImage={require('../../../static/images/main-image.jpg')}
      bgImageAlt="our photo"
      strength={350}
    >
      <div className="header-image-content">{props && props.text && <h1>{props.text}</h1>}</div>
    </Parallax>
  </div>
)
