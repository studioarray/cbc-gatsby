import React from "react"

const FrontpageContext = React.createContext()
const INITIAL_STATE = false

function FrontpageProvider(props) {
  const [frontpage, setFrontpage] = React.useState(INITIAL_STATE)
  const value = React.useMemo(() => {
    console.log(`frontpage === ${frontpage}`)
    return {
      frontpage,
      setFrontpage,
    }
  }, [frontpage])
  return <FrontpageContext.Provider value={value} {...props} />
}

function useFrontpage() {
  const context = React.useContext(FrontpageContext)
  if (!context) {
    throw new Error("useFrontpage must be used within a FrontpageProvider")
  }
  const { frontpage, setFrontpage } = context
  return { frontpage, setFrontpage }
}

export { FrontpageProvider, useFrontpage }
