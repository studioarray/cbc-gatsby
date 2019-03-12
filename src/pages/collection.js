import React from "react"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"
import _ from "lodash"
import Layout from "../components/Layout"

export default ({ data }) => {
  const artists = _.sortBy(data.cbc.listArtists.items, ["lastName"])
  return (
    <Layout>
      <h1>Collection</h1>
      <ul>
        {artists.map(({ firstName, lastName, slug, id, artworks }) => {
          // Filter out artworks with missing images
          const artworkWithImages = _.reject(
            artworks.items,
            o => !(o.images.items.length > 0)
          )
          // Sort ascending by sort year
          const sortedArtworks = _.sortBy(artworkWithImages, ["sortYear"])

          // Get image for first item in array
          const image =
            sortedArtworks.length > 0
              ? sortedArtworks[0].images.items[0].file
              : null

          return (
            <li key={id}>
              <Link to={`/artists/${slug}`}>
                {firstName} {lastName}
              </Link>
              {image !== null ? (
                <img
                  alt=""
                  src={`https://s3-${image.region}.amazonaws.com/${
                    image.bucket
                  }/${image.key}`}
                />
              ) : (
                "No image"
              )}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "one.jpg" }) {
//       ...fluidImage
//     }
//     imageTwo: file(relativePath: { eq: "two.jpg" }) {
//       ...fluidImage
//     }
//     imageThree: file(relativePath: { eq: "three.jpg" }) {
//       ...fluidImage
//     }
//   }
// `

export const query = graphql`
  query {
    cbc {
      listArtists(limit: 1000, filter: { visibility: { eq: public } }) {
        items {
          firstName
          lastName
          slug
          id
          artworks(limit: 1000, filter: { visibility: { eq: public } }) {
            items {
              sortYear
              images(filter: { index: { eq: 0 } }) {
                items {
                  index
                  file {
                    region
                    bucket
                    key
                  }
                }
              }
            }
          }
        }
        nextToken
      }
    }
  }
`
