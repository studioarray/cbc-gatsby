import { graphql } from "gatsby"
import _ from "lodash"
import React from "react"
import styled from "styled-components"
import Image from "../components/Image"
import { NextArtist, PrevArtist } from "../components/NextPrevArtist"
import SEO from "../components/SEO"
import { Headline, Link as TitleLink, List, Meta } from "../components/Styled"
import { FadeWrapper, Link } from "../components/Transitions"
import { useColour } from "../utils/colourContext"
import { settings } from "../utils/settings"

export default ({ data }) => {
  const { firstName, lastName, slug, artworks, bio } = data.artist.getArtist
  const sortedArtworks = _.reverse(
    _.sortBy(artworks.items, ["sortYear", "catalogueNumber"])
  )
  const { setColour } = useColour()
  setColour("0,0,0")

  return (
    <FadeWrapper>
      <SEO title={`${firstName} ${lastName}`} />
      <ArrowHeader>
        <Left>
          <PrevArtist slug={slug} />
        </Left>
        <Headline>
          {firstName} {lastName}
        </Headline>
        <Right>
          <NextArtist slug={slug} />
        </Right>
      </ArrowHeader>
      <Bio>{bio}</Bio>
      <CollectionList>
        {sortedArtworks.map(({ title, date, id, images, slug }) => (
          <CollectionListItem key={id}>
            <CollectionName>
              <TitleLink to={`/artworks/${slug}`}>
                <Meta artworktitle="true">
                  {/* TODO: break this out to it's own function. Joins the last two words of the title with a non-breaking space in order to prevent typographic widows */}
                  {title.replace(/\s(\S+)$/, `${String.fromCharCode(160)}$1`)}
                </Meta>
              </TitleLink>
              <Meta>{date.replace(/-/gi, "—")}</Meta>
            </CollectionName>
            <CollectionImage>
              {images.items.length > 0 && (
                <Link to={`/artworks/${slug}`}>
                  <Image fileKey={images.items[0].file.key} />
                </Link>
              )}
            </CollectionImage>
          </CollectionListItem>
        ))}
      </CollectionList>
    </FadeWrapper>
  )
}

export const ArrowHeader = styled.div`
  display: flex;
  min-width: calc(300px - ${settings.spacing * 2}px);
  align-items: center;
  h1,
  h2 {
    flex: 1;
    @media (min-width: ${settings.breakpoints.medium}) {
      flex: inherit;
    }
    margin-top: 0;
    margin-bottom: 0;
  }
`
export const Bio = styled.div`
  text-align: center;
  margin-top: 0.8em;
  margin-bottom: 2em;
  font-size: 12px;
`
export const Right = styled.div`
  flex: inherit;
  min-width: 16px;
  margin: 0;
  @media (min-width: ${settings.breakpoints.medium}) {
    flex: 1;
    margin: 0 ${settings.spacing}px;
  }
`
export const Left = styled(Right)`
  text-align: right;
`

const CollectionList = styled(List)`
  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${settings.spacing}px;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
const CollectionListItem = styled.li`
  display: flex;
  margin: 0 0 ${settings.spacing}px;
  @media (min-width: 360px) {
    flex-direction: row-reverse;
  }
`
const CollectionName = styled.div`
  width: 50%;
  @media (min-width: 360px) {
    width: calc(50% - 11px);
    margin-left: 11px;
    align-self: flex-end;
  }
  @media (min-width: 740px) {
    width: calc(50% - 15px);
    margin-left: 15px;
  }
`
const CollectionImage = styled.div`
  width: 50%;
  @media (min-width: 360px) {
    width: calc(50% - 11px);
    margin-right: 11px;
    align-self: flex-end;
  }
  @media (min-width: 740px) {
    width: calc(50% - 15px);
    margin-right: 15px;
  }
`

export { CollectionList, CollectionListItem, CollectionName, CollectionImage }

export const query = graphql`
  query($id: ID!) {
    artist: cbc {
      getArtist(id: $id) {
        lastName
        firstName
        bio
        slug
        visibility
        lastUpdated
        artworks(limit: 1000, filter: { visibility: { eq: public } }) {
          items {
            id
            title
            catalogueNumber
            sortYear
            date
            measurements
            technique
            images {
              items {
                colour
                index
                file {
                  bucket
                  region
                  key
                }
              }
            }
            slug
            visibility
          }
        }
      }
    }
  }
`
