import React from "react"
import { graphql } from "gatsby"
import PlacesList from "../components/PlacesList"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const TagTemplate = ({ data, pageContext }) => {
  const places = data.allContentfulPlace.nodes
  return (
    <Layout>
      <SEO title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-places">
          <PlacesList places={places} />
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query GetPlaceByTag($tag: String) {
    allContentfulPlace(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        title
        transportTime
        carTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export default TagTemplate
