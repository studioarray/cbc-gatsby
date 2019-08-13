import { graphql } from "gatsby"
import Img from "gatsby-image"
import _ from "lodash"
import React from "react"
import styled from "styled-components"
import ImageZoom from "../components/ImageZoom"
import SEO from "../components/metaSEO"
import { NextArtist, PrevArtist } from "../components/NextPrevArtist"
import { NextArtwork, PrevArtwork } from "../components/NextPrevArtwork"
import { Headline, Link, Meta } from "../components/Styled"
import { FadeWrapper } from "../components/Transitions"
import { useColour } from "../utils/colourContext"
import { settings } from "../utils/settings"
import { ArrowHeader, Left, Right } from "./Artist"

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
  margin-top: 2em;
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
  query($id: ID!, $regex: String!) {
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
      filter: { base: { regex: $regex } }
      sort: { fields: base }
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
