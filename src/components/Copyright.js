import React from "react"
import styled from "styled-components"
import { settings } from "../utils/settings"

export function Copyright() {
  return (
    <CopyContainer>
      &copy; {new Date().getFullYear()} Christian Bjelland Collection. All
      Rights Reserved.
    </CopyContainer>
  )
}

const CopyContainer = styled.div`
  font-size: ${settings.fontSize.small};
  margin: ${settings.spacing}px;
`
