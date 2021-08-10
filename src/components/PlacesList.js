import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import slugify from "slugify"

const PlacesList = ({ places = [] }) => {
  return (
    <div className="places-list">
      {places.map(place => {
        const { id, title, image, transportTime, carTime } = place
        const pathToImage = getImage(image)
        const slug = slugify(title, { lower: true })
        return (
          <Link key={id} to={`/${slug}`} className="place">
            <GatsbyImage
              image={pathToImage}
              className="place-img"
              alt={title}
            />
            <h5>{title}</h5>
            <p>
              transport: {transportTime}min | by car: {carTime}min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default PlacesList
