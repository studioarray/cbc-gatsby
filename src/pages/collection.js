import React from "react"
import { graphql, Link } from "gatsby"
import _ from "lodash"
import Layout from "../components/Layout"
import Image from "../components/Image"

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
              {image !== null ? <Image fileKey={image.key} /> : "No image"}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

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
