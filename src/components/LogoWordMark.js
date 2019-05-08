import React from "react"
import VerticalLogo from "../images/logo/logotype-vertical.svg"
import HorisontalLogo from "../images/logo/logotype-horisontal.svg"
import { LogoWMWrapperVertical, LogoWMWrapperHorisontal } from "./Styled"

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
