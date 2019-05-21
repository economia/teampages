import React from 'react'
import { MarkdownRemark } from '../../types/graphql'

export enum ZigZagPosition {
  LEFT = 0,
  RIGHT = 1,
}

export const ZigZagItem = (props: { position: ZigZagPosition; node: MarkdownRemark }) => {
  let imgCol = (
    <div
      className={`avatar-flex-image hp-${
        props.position === ZigZagPosition.LEFT ? 'left' : 'right'
      }-image`}
    >
      <img src={props.node.frontmatter!.leadimage} alt="" />
      <p>{props.node.frontmatter!.lead}</p>
      <p>{props.node.frontmatter!.name}</p>
    </div>
  )
  let textCol = <div dangerouslySetInnerHTML={{ __html: props.node.html! }} />
  return (
    <div className="avatar-flex">
      {props.position === ZigZagPosition.LEFT ? (
        <React.Fragment>
          {imgCol}
          {textCol}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {textCol}
          {imgCol}
        </React.Fragment>
      )}
    </div>
  )
}
