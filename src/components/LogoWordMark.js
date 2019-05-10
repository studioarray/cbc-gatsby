import React from "react"
import VerticalLogo from "../images/logo/logotype-vertical.svg"
import HorisontalLogo from "../images/logo/logotype-horisontal.svg"
import { LogoWMWrapperVertical, LogoWMWrapperHorisontal } from "./Styled"
import { Link } from "./Transitions"

const LogoWordMark = () => (
  <>
    <LogoWMWrapperVertical>
      <Link to="/collection">
        <VerticalLogo />
      </Link>
    </LogoWMWrapperVertical>
    <LogoWMWrapperHorisontal>
      <Link to="/collection">
        <HorisontalLogo />
      </Link>
    </LogoWMWrapperHorisontal>
  </>
)

export default LogoWordMark
