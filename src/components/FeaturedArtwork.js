import React, { useState, useEffect, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "./Image"
import { Link } from "./Transitions"
import styled, { css } from "styled-components"
import { useColour } from "../utils/colourContext"
import _ from "lodash"
import { useFeatured } from "../utils/featuredContext"
import useComponentSize from "@rehooks/component-size"
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
  const { setFeatured } = useFeatured()
  const { setColour } = useColour()
  const { title, artist, date, images, slug } = props
  const { file, colour } = images.items[0]
  const { firstName, lastName } = artist
  const ref = useRef(null)
  const { height } = useComponentSize(ref)
  const featured = {
    height,
    artist: {
      firstName,
      lastName,
      slug: artist.slug,
    },
    artwork: {
      title,
      slug,
      date,
    },
  }
  useEffect(() => {
    setFeatured(featured)
    setColour(colour)
  }, [height, title, colour])
  return (
    <FeaturedArtworkWrapper>
      <div className="image-wrapper" ref={ref}>
        <Link to={`/artworks/${slug}`}>
          <Image fileKey={file.key} />
        </Link>
      </div>
    </FeaturedArtworkWrapper>
  )
}

const FeaturedArtworkWrapper = styled.section`
  background: yellow;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: ${settings.breakpoints.medium}) {
    max-width: ${settings.breakpoints.medium};
    .image-wrapper {
      width: 100%;
    }
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
