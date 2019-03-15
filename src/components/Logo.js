import React from "react"
import { useStateValue } from "../utils/state"

const Logo = () => {
  const [{ logoColour }] = useStateValue()
  return (
    <>
      <h1>CBC Logo</h1>
      <h2>{logoColour}</h2>
    </>
  )
}

export default Logo
