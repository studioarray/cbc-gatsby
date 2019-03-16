import React from "react"
import { useStateValue } from "../utils/state"
import CBCLogo from "../images/logo/cbc.svg"

const Logo = () => {
  const [{ logoColour }] = useStateValue()
  return (
    <>
      <CBCLogo />
      <h2>{logoColour}</h2>
    </>
  )
}

export default Logo
