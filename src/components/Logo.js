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
    <LogoLink to="/" colour={colour}>
      <CBCLogo />
    </LogoLink>
  )
}

const LogoLink = styled(Link)`
  display: inline-block;
  width: 80%;
  height: 80%;
  margin: 10% 0 10% 20%;
  max-width: 180px;
  padding-left: 1px; /* Scaling issue fix */
  & path {
    transition: fill 0.2s ease-in;
    fill: ${props => `rgb(${props.colour})`};
  }
  & svg {
    overflow: visible; /* Scaling issue fix */
  }
`

export default Logo
