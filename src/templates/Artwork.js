import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ImageZoom from "../components/ImageZoom"
import {
  Headline,
  Meta,
  ArtworkWrapper,
  Link,
  ArtworkImage,
  ArtworkMeta,
} from "../components/Styled"
import { FadeWrapper } from "../components/Transitions"

import _ from "lodash"
import { useColour } from "../utils/colourContext"

export default ({ data }) => {
  const {
    title,
    artist,
    catalogueNumber,
    date,
    images,
    measurements,
    technique,
  } = data.artwork.getArtwork
  const { firstName, lastName } = artist

  if (!_.has(images, "items")) return null

  const { setColour } = useColour()
  const colour = images.items.length > 0 ? images.items[0].colour : "0,0,0"
  setColour(colour)

  return (
    <FadeWrapper>
      <Headline>
        <Link to={`/artists/${artist.slug}`}>
          {firstName} {lastName}
        </Link>
      </Headline>
      <ArtworkWrapper>
        <ArtworkImage>
          {data.images &&
            data.images.edges.map(({ node }, index) => (
              <ImageZoom key={index}>
                <Img fluid={node.childImageSharp.fluid} />
              </ImageZoom>
            ))}
        </ArtworkImage>
        <ArtworkMeta>
          <Meta artworktitle="true">
            {title.replace(/\s(\S+)$/, `${String.fromCharCode(160)}$1`)}
          </Meta>
          <Meta>{date.replace(/-/gi, "—")}</Meta>
          <Meta lineBreak>{technique}</Meta>
          <Meta>{measurements.replace(/x/gi, "×")}</Meta>
          <Meta uppercase small>
            CBS {catalogueNumber}
          </Meta>
        </ArtworkMeta>
      </ArtworkWrapper>
    </FadeWrapper>
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
        date
        measurements
        technique
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
