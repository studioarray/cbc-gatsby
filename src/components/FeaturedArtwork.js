import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "./Image"
import { Link } from "./Transitions"
import {
  FeaturedArtworkWrapper,
  FeaturedArtworkInner,
  FeaturedArtworkMeta,
} from "./Styled"
import { useColour } from "../utils/colourContext"
import _ from "lodash"

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
