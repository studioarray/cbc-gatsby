import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "./Styled"
import Arrow from "./Arrow"
import _ from "lodash"

export const NextArtwork = function NextArtwork({ artworkSlug, artistSlug }) {
  const { nextUrl } = LinkProvider(artworkSlug, artistSlug)
  return (
    nextUrl && (
      <Link to={nextUrl}>
        <Arrow direction="right" artwork="true" />
      </Link>
    )
  )
}

export const PrevArtwork = function PrevArtwork({ artworkSlug, artistSlug }) {
  const { prevUrl } = LinkProvider(artworkSlug, artistSlug)
  return (
    prevUrl && (
      <Link to={prevUrl}>
        <Arrow artwork="true" />
      </Link>
    )
  )
}

const LinkProvider = function LinkProvider(artworkSlug, artistSlug) {
  const artworksQuery = useStaticQuery(getArtworks)
  const [artworkList, setArtworkList] = useState()

  useEffect(() => {
    const filteredList = _.filter(
      artworksQuery.cbc.listArtworks.items,
      item => item.artist.slug === artistSlug
    )
    const sortedArtworks = _.reverse(
      _.sortBy(filteredList, ["sortYear", "catalogueNumber"])
    )
    setArtworkList(sortedArtworks)
  }, [artistSlug])

  if (artworkList) {
    const currentIndex = _.findIndex(artworkList, { slug: artworkSlug })

    return {
      nextUrl: getUrl(artworkList[currentIndex + 1]),
      prevUrl: getUrl(artworkList[currentIndex - 1]),
    }
  } else {
    return {
      nextUrl: null,
      prevUrl: null,
    }
  }
}

const getUrl = function getUrl(item) {
  return item ? `/artworks/${item.slug}` : null
}

const getArtworks = graphql`
  query {
    cbc {
      listArtworks(limit: 1000, filter: { visibility: { eq: public } }) {
        items {
          slug
          sortYear
          catalogueNumber
          artist {
            slug
          }
        }
      }
    }
  }
`
