import React from "react"
import TagsList from "./TagsList"
import PlacesList from "./PlacesList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulPlace(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        transportTime
        carTime
      }
    }
  }
`

const AllPlaces = () => {
  const data = useStaticQuery(query)
  const places = data.allContentfulPlace.nodes

  return (
    <section className="places-container">
      <TagsList places={places} />
      <PlacesList places={places} />
    </section>
  )
}

export default AllPlaces
