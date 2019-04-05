import React from "react"
import CBCLogo from "../images/logo/cbc.svg"
import { useStateValue } from "../utils/state"
import { LogoWrapper } from "./Styled"
import { Link } from "gatsby"

const Logo = () => {
  const [{ logoColour }] = useStateValue() || "0,0,0"
  try {
    return (
      <Link to="/">
        <LogoWrapper colour={logoColour}>
          <CBCLogo />
        </LogoWrapper>
      </Link>
    )
  } catch (error) {
    console.log(error)
    return null
  }
}

export default Logo
