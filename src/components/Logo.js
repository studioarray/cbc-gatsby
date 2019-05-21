import React from "react"
import CBCLogo from "../images/logo/cbc.svg"
import { Link } from "./Transitions"
import { useColour } from "../utils/colourContext"
import styled from "styled-components"

const Logo = () => {
  const { colour } = useColour()
  // console.log(`Colour: ${colour}`)
  // TODO: Fix colour transition lag, why is it getting called multiple times? Transition link...
  return (
    <Link to="/">
      <LogoWrapper colour={colour}>
        <CBCLogo />
      </LogoWrapper>
    </Link>
  )
}

const LogoWrapper = styled.div`
  width: 24.53333%;
  max-width: 184px;
  min-width: 67px;
  position: absolute;
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

export default Logo
