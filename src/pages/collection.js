import React from "react"
import _ from "lodash"
import Layout from "../components/Layout"
import Image from "../components/Image"
import ChangeLogoColour from "../components/ChangeLogoColour"
import { graphql, Link } from "gatsby"
import {
  Headline,
  BoldLink,
  CollectionList,
  CollectionListItem,
  CollectionName,
  CollectionImage,
} from "../components/Styled"

export default ({ data }) => {
  const artists = _.sortBy(data.cbc.listArtists.items, ["lastName"])
  return (
    <Layout>
      <ChangeLogoColour newColour="0,0,0" />
      <Headline>Collection</Headline>
      <CollectionList>
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
            <CollectionListItem key={id}>
              <CollectionName>
                <BoldLink to={`/artists/${slug}`}>
                  {firstName} {lastName}
                </BoldLink>
              </CollectionName>
              <CollectionImage>
                <Link to={`/artists/${slug}`}>
                  {image !== null ? <Image fileKey={image.key} /> : "No image"}
                </Link>
              </CollectionImage>
            </CollectionListItem>
          )
        })}
      </CollectionList>
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
