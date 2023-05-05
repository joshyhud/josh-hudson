import React from "react"
import PropTypes from "prop-types"
import { groq } from "next-sanity"
import {
  sanityClient,
  getClient,
  usePreviewSubscription,
  overlayDrafts,
} from "../lib/sanity"

import Layout from "../components/layout"
import Footer from "../components/footer"
import Seo from "../components/seo"
import PageBuilder from "../components/page-builder"
import { motion as m } from "framer-motion"

const slugQuery = groq`*[_type == "page" && defined(slug.current)][].slug.current`

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'page': *[_type == 'page' && slug.current == $slug]
}`

export async function getStaticProps({ params, preview = false }) {
  const { globalSettings, globalNavigation, page } = await getClient(
    preview
  ).fetch(pageQuery, { slug: params.slug })

  return {
    props: {
      preview,
      data: {
        globalSettings,
        page: overlayDrafts(page),
      },
    },
  }
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(slugQuery)

  return {
    paths: paths.map(slug => ({ params: { slug } })),
    fallback: true,
  }
}

const Page = ({ data = {}, preview }) => {
  const slug = data?.page?.slug?.current
  const { data: previewData } = usePreviewSubscription(pageQuery, {
    params: { slug },
    initialData: data,
    enabled: preview,
  })

  const page = overlayDrafts(previewData.page)

  return (
    <m.div
      className="main"
      style={{ backgroundColor: page?.backgroundColor }}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 1 }}
    >
      <Layout preview={preview}>
        <Seo
          globalSeo={data?.globalSettings}
          pageSeo={page?.seo}
          pageTitle={page?.pageTitle}
        />
        <PageBuilder blocks={page?.pageBuilder} />
      </Layout>
      <Footer />
    </m.div>
  )
}

export default Page

Page.propTypes = {
  page: PropTypes.object,
}
