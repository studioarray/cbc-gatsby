import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import ChangeLogoColour from "../components/ChangeLogoColour"
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

export default ({ data }) => {
  const {
    title,
    artist,
    visibility,
    catalogueNumber,
    images,
    date,
    measurements,
    technique,
  } = data.artwork.getArtwork
  const { firstName, lastName } = artist

  if (visibility === "hidden")
    console.error(`${catalogueNumber} should be hidden`)
  return (
    <Layout>
      {images.items.length > 0 && (
        <ChangeLogoColour newColour={images.items[0].colour} />
      )}
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
