import React from "react"
import CBCLogo from "../images/logo/cbc.svg"
import { LogoWrapper } from "./Styled"
import { Link } from "./Transitions"
import { useColour } from "../utils/colourContext"

const Logo = () => {
  const { colour } = useColour()
  console.log(`Colour: ${colour}`)
  return (
    <Link to="/">
      <LogoWrapper colour={colour}>
        <CBCLogo />
      </LogoWrapper>
    </Link>
  )
}

export default Logo
