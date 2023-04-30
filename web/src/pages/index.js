import React from "react"
import PropTypes from "prop-types"
import { groq } from "next-sanity"
import { getClient, usePreviewSubscription, overlayDrafts } from "../lib/sanity"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PageBuilder from "../components/page-builder"
import Footer from "../components/footer"
import { motion as m } from "framer-motion"

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'page': *[_id == *[_type == 'globalSettings'][0].homepage._ref]
}`

export async function getStaticProps({ params, preview = false }) {
  const { globalSettings, globalNavigation, page } = await getClient(
    preview
  ).fetch(pageQuery)

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

const Home = ({ data = {}, preview, router }) => {
  const { data: previewData } = usePreviewSubscription(pageQuery, {
    initialData: data,
    enabled: preview,
  })

  const page = overlayDrafts(previewData.page)

  return (
    <m.div
      className="main"
      style={{ backgroundColor: page?.backgroundColor }}
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <Layout preview={preview}>
        <Seo
          globalSeo={data.globalSettings}
          pageSeo={page?.seo}
          pageTitle={page?.pageTitle}
        />
        <PageBuilder blocks={page?.pageBuilder} />
      </Layout>
      <Footer />
    </m.div>
  )
}

export default Home

Home.propTypes = {
  page: PropTypes.object,
}
