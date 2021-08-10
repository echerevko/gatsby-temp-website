import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllPlaces from "../components/AllPlaces"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpg"
            alt="house"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
          <div className="hero-container">
            <div className="hero-text">
              <h2>favorite places </h2>
              <h4>just a piece of beautiful nature in Stockholm</h4>
            </div>
          </div>
        </header>
        <AllPlaces />
      </main>
    </Layout>
  )
}
