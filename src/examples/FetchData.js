import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        title
        description
        author
        person {
          name
          age
        }
        simpleData
        complexData {
          name
          age
        }
      }
    }
  }
`
const FetchData = () => {
  const data = useStaticQuery(getData)
  return <div>{<h1> Name: {data.site.info.person.name}</h1>}</div>
}

export default FetchData
