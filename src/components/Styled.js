import React from "react"
import styled from "styled-components"

export const LogoWrapper = styled.div`
  width: 100px;
  & path {
    fill: ${props => `rgb(${props.colour})`};
  }
`
