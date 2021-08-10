import React from "react"
import Layout from "../components/Layout"
import AllPlaces from "../components/AllPlaces"
import SEO from "../components/SEO"

const Places = () => {
  return (
    <Layout>
      <SEO title="Places" />
      <main className="page">
        <AllPlaces />
      </main>
    </Layout>
  )
}

export default Places
