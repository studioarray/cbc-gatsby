import React from "react"
import styled, { css } from "styled-components"
import Arrow from "../images/arrow.svg"

export default ({ direction }) => (
  <ArrowWrapper direction={direction}>
    <Arrow />
  </ArrowWrapper>
)

const ArrowWrapper = styled.div`
  position: relative;
  height: 12px;
  width: 16px;
  margin: 10px 0;
  ${props =>
    props.direction &&
    props.direction === "right" &&
    css`
      margin-left: 3px;
      svg {
        transform: rotate(180deg);
      }
    `}
`
