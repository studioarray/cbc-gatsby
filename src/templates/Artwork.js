import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
// import _ from "lodash"
import Img from "gatsby-image"

export default ({ data }) => {
  const { title, artist, visibility, catalogueNumber } = data.artwork.getArtwork
  const { firstName, lastName } = artist

  // try {
  //   let hasEdges = data.images.edges.length > 0
  // } catch (error) {
  //   console.log(error)
  //   console.log(data)
  // }

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
            <Img fixed={node.childImageSharp.fixed} key={index} />
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
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
