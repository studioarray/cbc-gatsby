import React from "react"
import State from "./src/utils/state"
import "remove-focus-outline"
import "./src/styles/global.css"
export const wrapRootElement = ({ element }) => <State>{element}</State>
