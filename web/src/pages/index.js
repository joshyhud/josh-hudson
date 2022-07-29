import React from 'react'
import PropTypes from 'prop-types'
import { groq } from 'next-sanity'
import { getClient, usePreviewSubscription, overlayDrafts } from '../lib/sanity'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Header from '../components/header'
import Hero from '../components/hero'
import PageBuilder from '../components/page-builder'
import Footer from '../components/footer'

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'globalNavigation': *[_type == 'globalNavigation'][0],
  'page': *[_id == *[_type == 'globalSettings'][0].homepage._ref]
}`

export async function getStaticProps({ params, preview = false }) {
  const { globalSettings, globalNavigation, page } = await getClient(preview).fetch(pageQuery)

  return {
    props: { 
      preview, 
      data: {
        globalSettings,
        globalNavigation,
        page: overlayDrafts(page)
      }
    }
  }
}

const Home = ({ data = {}, preview }) => {
  const {
    data: previewData,
  } = usePreviewSubscription(pageQuery, {
    initialData: data,
    enabled: preview
  })

  const page = overlayDrafts(previewData.page)

  return (
    <Layout preview={preview}>
      <Seo
        globalSeo={data.globalSettings}
        pageSeo={page?.seo}
        pageTitle={page?.pageTitle}
      />
      <Header navLinks={data.globalNavigation?.navLinks} />
      <Hero {...page?.hero} />
      <PageBuilder blocks={page?.pageBuilder} />
      <Footer />
    </Layout>
  )
}

export default Home

Home.propTypes = {
  page: PropTypes.object
}