import BaseBlockContent from "@sanity/block-content-to-react"
import React from "react"
import Link from "next/link"

import { LinkTest } from "../../helpers/link"

// We're overriding the default 'block' type to use a 'Lead', so we need to bring the default back in
const _require = require('@sanity/block-content-to-hyperscript/internals')

const { getSerializers } = _require
const renderNode = React.createElement
const _getSerializers = getSerializers(renderNode)
const { defaultSerializers } = _getSerializers

import styles from './PortableText.module.scss'

const serializers = {
  types: {
    undefined: () => null,
    block(props) {
      switch (props.node.style) {
        default:
          return BaseBlockContent.defaultSerializers.types.block(props)
      }
    }
  },
  marks: {
    link: ({children, mark}) => {
      const internal = LinkTest(mark.href)
      const target = !internal ? {target: "_blank"} : null
      const rel = !internal ? {rel: "nofollow noopener noreferrer"} : null
      
      return internal ? (
        <Link href={mark.href}>
          <a className={mark.blockLink ? styles.blockLink : ''}>
            {children}
          </a>
        </Link>
      ) : (
        <a className={mark.blockLink ? styles.blockLink : ''} href={mark.href} {...target} {...rel}>
          {children}
        </a>
      )
    }
  },
  block: props => {
    const { node } = props

    if (node.style === 'lead') {
      return (
        <p className={styles.textLead}>
          {node.children.map((child, index) => (
            <React.Fragment key={index}>{child.text}</React.Fragment>
          ))}
        </p>
      )
    }

    if (node.style === 'small') {
      return (
        <p className={styles.textSmall}>
          {node.children.map((child, index) => (
            <React.Fragment key={index}>{child.text}</React.Fragment>
          ))}
        </p>
      )
    }

    return defaultSerializers.types.block(props)
  }
}

const PortableText = ({ blocks }) => <div className={styles.portableText}><BaseBlockContent blocks={blocks} serializers={serializers} /></div>

export default PortableText