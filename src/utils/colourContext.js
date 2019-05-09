import React from "react"

const ColourContext = React.createContext()

function ColourProvider(props) {
  const [colour, setColour] = React.useState("0,0,0")
  const value = React.useMemo(() => {
    // console.log(`Colour change: ${colour}`)
    return {
      colour,
      setColour,
    }
  }, [colour])
  return <ColourContext.Provider value={value} {...props} />
}

function useColour() {
  const context = React.useContext(ColourContext)
  if (!context) {
    throw new Error("useColour must be used within a ColourProvider")
  }
  const { colour, setColour } = context
  return { colour, setColour }
}

export { ColourProvider, useColour }
