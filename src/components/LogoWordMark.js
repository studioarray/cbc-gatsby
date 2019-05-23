import React from "react"
import VerticalLogo from "../images/logo/logotype-vertical.svg"
import HorisontalLogo from "../images/logo/logotype-horisontal.svg"
import { Link } from "./Transitions"
import styled from "styled-components"
import { settings } from "../utils/settings"

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

const LogoWMWrapperVertical = styled.div`
  display: inline-block;
  width: 40%;
  @media (min-width: ${settings.breakpoints.medium}) {
    display: none;
  }
`
const LogoWMWrapperHorisontal = styled.div`
  display: none;
  width: 100%;
  max-width: 350px;
  @media (min-width: ${settings.breakpoints.medium}) {
    display: inline-block;
  }
`

export default LogoWordMark
