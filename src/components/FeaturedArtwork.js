import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "./Image"
import { Link } from "./Transitions"
import styled from "styled-components"
import { useColour } from "../utils/colourContext"
import _ from "lodash"
import { settings } from "../utils/settings"

export function FeaturedArtwork() {
  const data = useStaticQuery(featuredImagesQuery)
  const [randomArtwork, setRandomArtwork] = useState()

  useEffect(() => {
    const items = data.cbc.listArtworks.items
    const selectedItem = _.sample(items)
    setRandomArtwork(selectedItem)
  }, [])

  return randomArtwork !== undefined ? <Artwork {...randomArtwork} /> : null
}

const Artwork = props => {
  const { title, artist, date, images, slug } = props
  const { file, colour } = images.items[0]
  const { firstName, lastName } = artist
  const { setColour } = useColour()
  setColour(colour)
  return (
    <FeaturedArtworkWrapper>
      <FeaturedArtworkInner>
        <div className="image-wrapper">
          <Link to={`/artworks/${slug}`}>
            <Image fileKey={file.key} />
          </Link>
        </div>
        <FeaturedArtworkMeta>
          <Link to={`/artists/${artist.slug}`}>
            {firstName} {lastName}
          </Link>
          ,{` `}
          <Link to={`/artworks/${slug}`} artworktitle="true">
            {title}
          </Link>
          , {date.replace(/-/gi, "—")}
        </FeaturedArtworkMeta>
      </FeaturedArtworkInner>
    </FeaturedArtworkWrapper>
  )
}

const FeaturedArtworkWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 40px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const FeaturedArtworkInner = styled.figure`
  margin-top: 120px;
  margin-bottom: 1em;
  width: 100vmin;
  max-width: 360px;
  min-width: 226px;
  @media (min-width: 740px) {
    margin: 0;
    .image-wrapper {
      width: 100%;
      max-width: 60vmin;
      position: absolute;
      top: 52%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  img {
    object-fit: contain !important;
  }
`
export const FeaturedArtworkMeta = styled.div`
  font-size: ${settings.fontSize.small};
  font-style: italic;
  line-height: 1em;
  white-space: nowrap;
  margin-top: 0.5em;

  @media (min-width: 740px) {
    line-height: 1em;
    width: auto;
    position: fixed;
    left: ${settings.spacing}px;
    bottom: 20px;
  }
`

const featuredImagesQuery = graphql`
  query {
    cbc {
      listArtworks(
        filter: { featured: { eq: true }, visibility: { eq: public } }
        limit: 1000
      ) {
        items {
          title
          date
          slug
          images {
            items {
              colour
              file {
                key
              }
            }
          }
          artist {
            firstName
            lastName
            slug
          }
        }
      }
    }
  }
`
