import React from "react"

const FeaturedContext = React.createContext()
const INITIAL_STATE = {
  height: 0,
  artist: {
    firstName: null,
    lastName: null,
    slug: null,
  },
  artwork: {
    title: null,
    slug: null,
    date: null,
  },
}

function FeaturedProvider(props) {
  const [featured, setFeatured] = React.useState(INITIAL_STATE)
  const value = React.useMemo(() => {
    // console.log(featured)
    return {
      featured,
      setFeatured,
    }
  }, [featured])
  return <FeaturedContext.Provider value={value} {...props} />
}

function useFeatured() {
  const context = React.useContext(FeaturedContext)
  if (!context) {
    throw new Error("useFeatured must be used within a FeaturedProvider")
  }
  const { featured, setFeatured } = context
  return { featured, setFeatured }
}

export { FeaturedProvider, useFeatured }
