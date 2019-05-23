import React from "react"
import styled from "styled-components"
import { useFeatured } from "../utils/featuredContext"
import { settings } from "../utils/settings"
import { Link } from "./Transitions"
import { useFrontpage } from "../utils/frontpageContext"

export default function FeaturedArtworkMeta({ location }) {
  const { frontpage } = useFrontpage()
  const { featured } = useFeatured()
  const { artist, artwork } = featured
  // TODO: frontpage fade in/out transition
  return (
    frontpage &&
    artist &&
    artwork.date && (
      <Meta>
        <Link to={`/artists/${artist.slug}`}>
          {artist.firstName} {artist.lastName}
        </Link>
        ,{` `}
        <Link to={`/artworks/${artwork.slug}`} artworktitle="true">
          {artwork.title}
        </Link>
        , {artwork.date.replace(/-/gi, "—")}
      </Meta>
    )
  )
}

const Meta = styled.div`
  font-size: ${settings.fontSize.small};
  font-style: italic;
  margin: ${settings.spacing}px;

  @media (min-width: 740px) {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 20;
  }
`
