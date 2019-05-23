import React from "react"
import styled, { css } from "styled-components"
import Arrow from "../images/arrow.svg"
import { settings } from "../utils/settings"

export default ({ direction, artwork }) => (
  <ArrowWrapper direction={direction} artwork={artwork}>
    <Arrow />
  </ArrowWrapper>
)

const ArrowWrapper = styled.div`
  transition: 0.5s opacity;
  &:hover {
    opacity: 0.6;
  }
  position: relative;
  height: 12px;
  width: 16px;
  svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  ${props =>
    props.artwork &&
    css`
      margin: 0;
      @media (min-width: ${settings.breakpoints.medium}) {
        margin-bottom: ${props.direction === "right" ? "0" : "10px"};
        margin-left: ${props.direction === "right" ? "2px" : "0"};
      }
    `}
  ${props =>
    props.direction &&
    props.direction === "right" &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
  /* ${props =>
    props.direction &&
    props.direction === "right" &&
    props.artwork &&
    css`
      margin-left: 3px;
    `} */
`
