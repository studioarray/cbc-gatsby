import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
// import _ from "lodash"
import Img from "gatsby-image"

export default ({ data }) => {
  const { title, artist, visibility, catalogueNumber } = data.artwork.getArtwork
  const { firstName, lastName } = artist

  if (visibility === "hidden")
    console.error(`${catalogueNumber} should be hidden`)
  return (
    <Layout>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{title}</h2>
      {data.images
        ? data.images.edges.map(({ node }, index) => (
            <Img fluid={node.childImageSharp.fluid} key={index} />
          ))
        : null}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!, $regexCatalogueNumber: String!) {
    artwork: cbc {
      getArtwork(id: $id) {
        catalogueNumber
        slug
        title
        visibility
        images {
          items {
            index
            colour
            file {
              key
              bucket
              region
            }
          }
        }
        artist {
          slug
          lastName
          firstName
        }
      }
    }
    images: allFile(
      filter: { name: { regex: $regexCatalogueNumber } }
      sort: { fields: name }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
