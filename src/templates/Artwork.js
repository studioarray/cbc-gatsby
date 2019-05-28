import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ImageZoom from "../components/ImageZoom"
import { Headline, Meta, Link } from "../components/Styled"
import styled from "styled-components"
import { settings } from "../utils/settings"
import { FadeWrapper } from "../components/Transitions"
import { PrevArtist, NextArtist } from "../components/NextPrevArtist"

import _ from "lodash"
import { useColour } from "../utils/colourContext"
import { PrevArtwork, NextArtwork } from "../components/NextPrevArtwork"
import { ArrowHeader, Left, Right } from "./Artist"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    title,
    artist,
    catalogueNumber,
    date,
    images,
    slug,
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
      <SEO
        title={`${firstName} ${lastName} ${String.fromCharCode(8212)} ${title}`}
      />
      <ArrowHeader>
        <Left>
          <PrevArtist slug={artist.slug} />
        </Left>
        <Headline>
          <Link to={`/artists/${artist.slug}`}>
            {firstName} {lastName}
          </Link>
        </Headline>
        <Right>
          <NextArtist slug={artist.slug} />
        </Right>
      </ArrowHeader>
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
          <ShowOnMobile>
            <ArrowHeader>
              <Left>
                <PrevArtwork artworkSlug={slug} artistSlug={artist.slug} />
              </Left>
              <ArtworkTitle>
                {title.replace(/\s(\S+)$/, `${String.fromCharCode(160)}$1`)}
              </ArtworkTitle>
              <Right>
                <NextArtwork artworkSlug={slug} artistSlug={artist.slug} />
              </Right>
            </ArrowHeader>
          </ShowOnMobile>
          <HideOnMobile>
            <Meta artworktitle="true">
              {title.replace(/\s(\S+)$/, `${String.fromCharCode(160)}$1`)}
            </Meta>
          </HideOnMobile>
          <Meta>{date.replace(/-/gi, "—")}</Meta>
          <Meta lineBreak>{technique}</Meta>
          <Meta>
            {measurements.replace(/x/gi, `${String.fromCharCode(215)}`)}
          </Meta>
          <Meta uppercase small>
            CBS {catalogueNumber}
          </Meta>
          <HideOnMobile>
            <StackedArrows>
              <PrevArtwork artworkSlug={slug} artistSlug={artist.slug} />
              <NextArtwork artworkSlug={slug} artistSlug={artist.slug} />
            </StackedArrows>
          </HideOnMobile>
        </ArtworkMeta>
      </ArtworkWrapper>
    </FadeWrapper>
  )
}

const ArtworkWrapper = styled.section`
  @media (min-width: ${settings.breakpoints.medium}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${settings.spacing}px;
  }
`

const ShowOnMobile = styled.span`
  display: block;
  margin-bottom: ${settings.spacing}px;
  @media (min-width: ${settings.breakpoints.medium}) {
    display: none;
  }
`

const HideOnMobile = styled.span`
  display: none;
  @media (min-width: ${settings.breakpoints.medium}) {
    display: initial;
  }
`

const StackedArrows = styled.div`
  margin-top: 20px;
  a {
    float: left;
    clear: both;
  }
`

const ArtworkTitle = styled.h2`
  font-size: ${settings.fontSize.large};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
`
const ArtworkImage = styled.figure`
  margin: 0;
  & > div {
    margin-bottom: ${settings.fontSize.large};
  }
`
const ArtworkMeta = styled.div`
  margin-bottom: 2em;
`

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
