import React from "react"
import CBCLogo from "../images/logo/cbc.svg"
import { useStateValue } from "../utils/state"
import { LogoWrapper } from "./Styled"

const Logo = () => {
  const [{ logoColour }] = useStateValue()
  return (
    <LogoWrapper colour={logoColour}>
      <CBCLogo />
    </LogoWrapper>
  )
}

export default Logo
