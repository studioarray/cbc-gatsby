import React from "react"
import _ from "lodash"
import Image from "../components/Image"
import { graphql } from "gatsby"
import {
  Headline,
  BoldLink,
  CollectionList,
  CollectionListItem,
  CollectionName,
  CollectionImage,
} from "../components/Styled"
import { FadeWrapper, Link } from "../components/Transitions"
import { useColour } from "../utils/colourContext"

export default ({ data }) => {
  const artists = _.sortBy(data.cbc.listArtists.items, ["lastName"])
  const { setColour } = useColour()
  setColour("0,0,0")
  return (
    <FadeWrapper>
      <Headline>Collection</Headline>
      <CollectionList>
        {artists.map(({ firstName, lastName, slug, id, thumbnail }) => (
          <CollectionListItem key={id}>
            <CollectionName>
              <BoldLink to={`/artists/${slug}`}>
                {firstName} {lastName}
              </BoldLink>
            </CollectionName>
            <CollectionImage>
              <Link to={`/artists/${slug}`}>
                {thumbnail !== null ? (
                  <Image fileKey={thumbnail.file.key} />
                ) : (
                  "No image"
                )}
              </Link>
            </CollectionImage>
          </CollectionListItem>
        ))}
      </CollectionList>
    </FadeWrapper>
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
          thumbnail {
            file {
              key
              bucket
              region
            }
          }
        }
        nextToken
      }
    }
  }
`

// artworks(limit: 1000, filter: { visibility: { eq: public } }) {
//   items {
//     sortYear
//     images(filter: { index: { eq: 0 } }) {
//       items {
//         index
//         file {
//           region
//           bucket
//           key
//         }
//       }
//     }
//   }
// }
