// import React from "react"
import styled, { css } from "styled-components"
import { rhythm } from "../utils/typography"
import { Link as GatsbyLink } from "gatsby"

export const LogoWrapper = styled.div`
  width: 24.53333%;
  max-width: 184px;
  min-width: 67px;
  position: fixed;
  top: 42px;
  right: 0;
  z-index: 2;
  & path {
    transition: fill 0.2s ease-in;
    fill: ${props => `rgb(${props.colour})`};
  }
  @media (max-width: 270px) {
    right: auto;
    left: calc(270px - 67px);
  }
`

export const LogoWMWrapperVertical = styled.div`
  width: 23.46666%;
  position: fixed;
  top: 42px;
  height: 26.5vw;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  max-width: 160px;
  min-width: 64px;
  min-height: 72px;
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 270px) {
    left: calc(270px / 2);
  }
  @media (min-width: 460px) {
    display: none;
  }
`
export const LogoWMWrapperHorisontal = styled.div`
  display: none;
  @media (min-width: 460px) {
    display: block;
  }
  position: fixed;
  top: 0;
  height: 30vw;
  max-height: 180px;
  width: 40%;
  max-width: 360px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  /* max-width: 200px; */
`

export const Menu = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(240, 240, 240, 0.95);
  @supports (backdrop-filter: blur(3px)) {
    background: rgba(240, 240, 240, 0.7);
    backdrop-filter: blur(15px);
  }
  transition: transform 0.25s ease-out;
  transition: ${({ active }) =>
    active
      ? css`transform 0.25s ease-out, opacity 0.2s ease-out`
      : css`transform 0.25s ease-in .45s, opacity 0.2s ease-in .5s`};
  ${({ active }) =>
    active
      ? css`
          transform: translateY(0);
          opacity: 1;
        `
      : css`
          transform: translateY(-100%);
          opacity: 0;
        `}
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  li {
    transition: ${({ active }) =>
      active
        ? css`opacity 0.2s ease-out 0.3s, transform 0.3s ease-out 0.2s`
        : css`opacity 0.2s ease-out, transform 0.2s ease-out`};
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    line-height: ${rhythm(3)};
    ${({ active }) =>
      active
        ? css`
            transform: translateY(0);
            opacity: 1;
          `
        : css`
            transform: translateY(-100%);
            opacity: 0;
          `}
  }
  li:nth-child(1) {
    transition-delay: 0.2s;
  }
  li:nth-child(2) {
    transition-delay: 0.25s;
  }
  li:nth-child(3) {
    transition-delay: 0.3s;
  }
  li:nth-child(4) {
    transition-delay: 0.35s;
  }
`

export const Link = styled(GatsbyLink)`
  text-decoration: none;
  transition: color 0.25s ease-out;
  &:link,
  &:visited,
  &:active {
    color: rgba(0, 0, 0, 0.8);
  }
  &:hover {
    color: rgba(100, 100, 100, 0.8);
  }
`

export const FullHeight = styled.section`
  min-height: 100vh;
  margin: 0 22px;
  position: relative;
`

export const Main = styled.main`
  width: 100%;
`

export const FeaturedArtworkWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - ${rhythm(1)});
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FeaturedArtworkInner = styled.figure`
  margin-top: 120px;
  margin-bottom: ${rhythm(3)};
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
`
export const Footer = styled.footer`
  width: 100%;
  white-space: nowrap;
  line-height: ${rhythm(2)};
  margin: -${rhythm(2)} 0 ${rhythm()};
  @media (min-width: 740px) {
    line-height: ${rhythm(3)};
    margin: 0;
    width: auto;
    position: absolute;
    right: 30px;
    bottom: 0px;
  }
`

export const FeaturedArtworkMeta = styled.div`
  font-style: italic;
  line-height: ${rhythm(2)};
  white-space: nowrap;

  @media (min-width: 740px) {
    line-height: ${rhythm(3)};
    width: auto;
    position: absolute;
    left: 30px;
    bottom: 0px;
  }
`

export const Headline = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-top: 160px;
  @media (min-width: 360px) {
    margin-top: 170px;
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const BoldLink = styled(Link)`
  font-size: 14px;
  font-weight: bold;
`

export const CollectionList = styled(List)`
  margin-top: ${rhythm(4)};
  padding-bottom: ${rhythm(4)};
  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 30px;
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const CollectionListItem = styled.li`
  display: flex;
  margin: 0 0 ${rhythm(2)};
  @media (min-width: 360px) {
    flex-direction: row-reverse;
  }
`

export const CollectionName = styled.div`
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

export const CollectionImage = styled.div`
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
