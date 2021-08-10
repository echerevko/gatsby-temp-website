import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import PlacesList from "../components/PlacesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulPlace: { nodes: places },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>So, this is story...</h2>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpg"
            alt="The story"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-places">
          <h5>Look at this Beautiful Places!</h5>
          <PlacesList places={places} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulPlace(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        carTime
        transportTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
