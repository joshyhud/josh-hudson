import React from 'react'
import PropTypes from 'prop-types'
import { groq } from 'next-sanity'
import { getClient } from '../lib/sanity'

import Seo from '../components/seo'
import Header from '../components/header'
import PageBuilder from '../components/page-builder'

const pageQuery = groq`{
  'globalSettings': *[_type == 'globalSettings'][0],
  'page': *[_id == *[_type == 'globalSettings'][0].homepage._ref][0]
}`

export async function getStaticProps() {
  const data = await getClient.fetch(pageQuery)

  return {
    props: { ...data }
  }
}

const Home = ({ globalSettings, page }) => {
  const { pageTitle, pageBuilder, seo } = page

  return (
    <>
      <Seo
        globalSeo={globalSettings}
        pageSeo={seo}
        pageTitle={pageTitle}
      />
      <Header />
      <PageBuilder blocks={pageBuilder} />
    </>
  )
}

export default Home

Home.propTypes = {
  page: PropTypes.object
}