import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import Image from "../components/Image"
import {
  Headline,
  CollectionList,
  CollectionListItem,
  CollectionName,
  CollectionImage,
  Link as TitleLink,
  Meta,
} from "../components/Styled"
import { FadeWrapper, Link } from "../components/Transitions"
import { useColour } from "../utils/colourContext"

export default ({ data }) => {
  const { firstName, lastName, artworks } = data.artist.getArtist
  const sortedArtworks = _.reverse(
    _.sortBy(artworks.items, ["sortYear", "catalogueNumber"])
  )
  const { setColour } = useColour()
  setColour("0,0,0")

  return (
    <FadeWrapper>
      <Headline>
        {firstName} {lastName}
      </Headline>
      <CollectionList>
        {sortedArtworks.map(({ title, date, id, images, slug }) => (
          <CollectionListItem key={id}>
            <CollectionName>
              <TitleLink to={`/artworks/${slug}`}>
                <Meta artworktitle="true">
                  {/* TODO: break this out to it's own function. Joins the last two words of the title with a non-breaking space in order to prevent typographic widows */}
                  {title.replace(/\s(\S+)$/, `${String.fromCharCode(160)}$1`)}
                </Meta>
              </TitleLink>
              <Meta>{date.replace(/-/gi, "—")}</Meta>
            </CollectionName>
            <CollectionImage>
              {images.items.length > 0 && (
                <Link to={`/artworks/${slug}`}>
                  <Image fileKey={images.items[0].file.key} />
                </Link>
              )}
            </CollectionImage>
          </CollectionListItem>
        ))}
      </CollectionList>
    </FadeWrapper>
  )
}

export const query = graphql`
  query($id: ID!) {
    artist: cbc {
      getArtist(id: $id) {
        lastName
        firstName
        birthYear
        deathYear
        bio
        slug
        visibility
        lastUpdated
        artworks(limit: 1000, filter: { visibility: { eq: public } }) {
          items {
            id
            title
            catalogueNumber
            sortYear
            date
            measurements
            technique
            images {
              items {
                colour
                index
                file {
                  bucket
                  region
                  key
                }
              }
            }
            slug
            visibility
          }
        }
      }
    }
  }
`
