// import React from "react"
import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "./Transitions"
import { Field, Form } from "formik"

const settings = {
  fontSize: {
    small: "10px",
    medium: "13px",
    large: "15px",
    xLarge: "24px",
  },
  spacing: "30",
  colours: {
    black: "#1d1d1b",
    grey: "#aaa",
  },
}

export const LogoWrapper = styled.div`
  width: 24.53333%;
  max-width: 184px;
  min-width: 67px;
  position: fixed;
  top: 42px;
  right: 0;
  padding-left: 1px; /* Scaling issue fix */
  z-index: 20;
  & path {
    transition: fill 0.2s ease-in;
    fill: ${props => `rgb(${props.colour})`};
  }
  & svg {
    overflow: visible; /* Scaling issue fix */
  }
  @media (max-width: 270px) {
    right: auto;
    left: calc(270px - 67px);
  }
`

export const LogoWMWrapperVertical = styled.div`
  width: 23.46666%;
  position: absolute;
  top: 42px;
  height: 26.5vw;
  left: 50%;
  z-index: 20;
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
  position: absolute;
  top: 0;
  height: 30vw;
  max-height: 180px;
  width: 40%;
  max-width: 360px;
  left: 50%;
  z-index: 20;
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
  z-index: 10;
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
    font-size: ${settings.fontSize.xLarge};
    letter-spacing: 0.025em;
    line-height: 2em;
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
    a {
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
    }
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
  ${props =>
    props.artworktitle &&
    css`
      font-weight: bold;
      font-style: italic;
    `}
`

export const BoldLink = styled(Link)`
  font-size: ${settings.fontSize.medium};
  font-weight: bold;
`

export const FullHeight = styled.section`
  /* min-height: 100vh; */
  margin: 0 22px;
  position: relative;
`

export const Main = styled.main`
  width: 100%;
`

export const FeaturedArtworkWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 1em);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FeaturedArtworkInner = styled.figure`
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
export const Footer = styled.footer`
  width: 100%;
  font-size: ${settings.fontSize.small};
  white-space: nowrap;
  line-height: 1em;
  margin: 0;
  position: fixed;
  left: ${settings.spacing}px;
  bottom: 20px;
  @media (min-width: 740px) {
    left: auto;
    line-height: 1em;
    margin: 0;
    width: auto;
    right: ${settings.spacing}px;
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

export const Headline = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 160px;
  margin-bottom: ${settings.spacing}px;
  @media (min-width: 360px) {
    margin-top: 170px;
  }
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const CollectionList = styled(List)`
  margin-top: 1em;
  padding-bottom: 1em;
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

export const CollectionListItem = styled.li`
  display: flex;
  margin: 0 0 ${settings.spacing}px;
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

export const ArtistsList = styled(List)`
  margin-top: ${settings.spacing * 2}px;
  padding-bottom: 1em;
  font-size: ${settings.fontSize.medium};
  li:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${settings.spacing}px;
    li:not(:last-child) {
      border-bottom: none;
    }
    li {
      border-top: 1px solid #ddd;
      padding-top: 1em;
    }
  }
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const ArtistsListItem = styled.li`
  display: flex;
  margin: 0 0 1em;
`
export const ArtistsAlphaChar = styled.div`
  font-weight: bold;
  width: 50%;
`
export const ArtistsColumn = styled.div`
  width: 50%;
`
export const ArtistLink = styled(Link)`
  display: block;
  padding-bottom: 1em;
`
export const Meta = styled.div`
  font-size: ${settings.fontSize.medium};
  line-height: 1em;
  margin-top: 0;
  margin-bottom: .3em;
  ${props =>
    props.artworktitle &&
    css`
      font-size: ${settings.fontSize.large};
      font-weight: bold;
      font-style: italic;
    `}
  ${props =>
    props.small &&
    css`
      font-size: ${settings.fontSize.small};
    `}
  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
  ${props =>
    props.lineBreak &&
    css`
      margin-top: 1.5em;
    `}
  ${props =>
    props.lineBreakDown &&
    css`
      margin-bottom: 1.5em;
    `}
`

export const ArtworkWrapper = styled.section`
  margin-top: 1em;
  padding-bottom: 1em;
  @media (min-width: 740px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${settings.spacing}px;
  }
`

export const ArtworkImage = styled.figure`
  margin: 0;
  & > div {
    margin-bottom: ${settings.fontSize.large};
  }
`
export const ArtworkMeta = styled.div`
  margin-bottom: 2em;
`

export const AboutText = styled.div`
  margin-top: 1em;
  padding-bottom: 1em;
  font-size: 14px;
  max-width: 460px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`

// Contact page

export const StyledField = styled(Field)`
  font-family: inherit;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-bottom: 2px solid ${settings.colours.black};
  margin-bottom: 1em;
  line-height: 2;
  font-size: ${settings.fontSize.large};
  ${props =>
    props.component === "textarea" &&
    css`
      line-height: 1.5;
      resize: none;
    `}
`

export const ErrorWrapper = styled.div`
  font-size: ${settings.fontSize.medium};
  margin-bottom: 1em;
  text-align: center;
  position: absolute;
  bottom: -2.2em;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  width: 100%;
  & > span {
    color: white;
    background: ${settings.colours.grey};
    border-radius: 3px;
    padding: 5px 7px;
    position: relative;
    top: 0;
    white-space: nowrap;
    &::before {
      content: "";
      position: absolute;
      top: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 5px 8px 5px;
      border-color: transparent transparent ${settings.colours.grey} transparent;
    }
  }
`

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const FormButton = styled.button`
  font-family: inherit;
  font-size: ${settings.fontSize.large};
  float: right;
  border: 0;
  margin: 0;
  padding: 0.4em 1.2em;
  background: ${settings.colours.black};
  color: white;
  border-radius: 1.2em;
  transition: 0.3s ease opacity;
  &[disabled],
  &[disabled]:hover {
    opacity: 0.3;
    cursor: wait;
  }
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
export const FieldSet = styled.fieldset`
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  &[disabled] {
    opacity: 0.3;
  }
  &[disabled] > *:hover {
    cursor: wait;
  }
`
