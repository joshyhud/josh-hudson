import React from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import { useRouter } from "next/router"

import { urlFor } from "../lib/sanity"

const Seo = ({ globalSeo, pageSeo, pageTitle }) => {
  const router = useRouter()
  const canonical = pageSeo.canonical ?? `${globalSeo.url}${router.asPath}`
  const { title, description, ogImage } = globalSeo
  const { metaTitle, image, noIndex } = pageSeo
  const formattedTitle = metaTitle ? `${metaTitle}` : `${pageTitle} | ${title}`

  const resolvedImage = image || ogImage
  const imageUrl = urlFor(resolvedImage)

  return (
    <Head>
      {noIndex && <meta name="robots" content="noindex" />}
      <title>{formattedTitle}</title>
      <meta name="description" content={pageSeo?.description || description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={pageTitle} />
      <meta
        name="og:description"
        property="og:description"
        content={pageSeo?.description || description}
      />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta
        name="twitter:description"
        content={pageSeo?.description || description}
      />
      <meta name="twitter:site" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:image" content={imageUrl} />
      <link legacyBehavior rel="canonical" href={canonical} />
      <link legacyBehavior rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default Seo
Seo.propTypes = {
  globalSeo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    ogImage: PropTypes.object.isRequired,
  }),
  pageSeo: PropTypes.shape({
    metaTitle: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    noIndex: PropTypes.bool,
  }),
  pageTitle: PropTypes.string,
  canonical: PropTypes.string,
  image: PropTypes.object,
}

Seo.defaultProps = {
  pageSeo: {},
}
