import React from "react"
import VerticalLogo from "../images/logo/logotype-vertical.svg"
import HorisontalLogo from "../images/logo/logotype-horisontal.svg"
import { LogoWMWrapperVertical, LogoWMWrapperHorisontal } from "./Styled"
// import { Link } from "gatsby"

const LogoWordMark = () => (
  <>
    <LogoWMWrapperVertical>
      <VerticalLogo />
    </LogoWMWrapperVertical>
    <LogoWMWrapperHorisontal>
      <HorisontalLogo />
    </LogoWMWrapperHorisontal>
  </>
)

export default LogoWordMark
