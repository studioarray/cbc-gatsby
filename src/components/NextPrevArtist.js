import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "./Styled"
import Arrow from "./Arrow"
import _ from "lodash"

export const NextArtist = function NextArtist({ slug }) {
  const { nextUrl } = LinkProvider(slug)
  return (
    nextUrl && (
      <Link to={nextUrl} style={{ display: "inline-block" }}>
        <Arrow direction="right" />
      </Link>
    )
  )
}

export const PrevArtist = function PrevArtist({ slug }) {
  const { prevUrl } = LinkProvider(slug)
  return (
    prevUrl && (
      <Link to={prevUrl} style={{ display: "inline-block" }}>
        <Arrow />
      </Link>
    )
  )
}

const LinkProvider = function LinkProvider(slug) {
  const artistsQuery = useStaticQuery(getAllArtistsQuery)
  const [artistList, setArtistList] = useState()

  useEffect(() => {
    const sortedList = _.sortBy(artistsQuery.cbc.listArtists.items, [
      "lastName",
    ])
    setArtistList(sortedList)
  }, [])

  if (artistList) {
    const currentIndex = _.findIndex(artistList, { slug })

    return {
      nextUrl: getUrl(artistList[currentIndex + 1]),
      prevUrl: getUrl(artistList[currentIndex - 1]),
    }
  } else {
    return {
      nextUrl: null,
      prevUrl: null,
    }
  }
}

const getUrl = function getUrl(item) {
  return item ? `/artists/${item.slug}` : null
}

const getAllArtistsQuery = graphql`
  query {
    cbc {
      listArtists(limit: 1000, filter: { visibility: { eq: public } }) {
        items {
          firstName
          lastName
          slug
          id
        }
      }
    }
  }
`
