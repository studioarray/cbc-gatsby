import React from "react"

// Set initial state
const initialState = {
  logoColour: "0,0,0",
}

// State reducer
const stateReducer = (state, action) => {
  switch (action.type) {
    case "changeColour":
      return {
        ...state,
        logoColour: action.newColour,
      }

    default:
      return state
  }
}

// Create state context
export const StateContext = React.createContext()
// Export context hook
export const useStateValue = () => React.useContext(StateContext)

// Export state context provider with reducer
const State = ({ children }) => (
  <StateContext.Provider value={React.useReducer(stateReducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export default State
