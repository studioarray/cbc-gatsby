import styled, { css } from "styled-components"
import { Link as GatsbyLink } from "./Transitions"
import { settings } from "../utils/settings"

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
export const Headline = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${settings.spacing}px;
`
export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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
