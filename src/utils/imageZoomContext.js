import React from "react"

const ImageZoomContext = React.createContext()
const INITIAL_STATE = false

function ImageZoomProvider(props) {
  const [imageZoom, setImageZoom] = React.useState(INITIAL_STATE)
  const value = React.useMemo(() => {
    return {
      imageZoom,
      setImageZoom,
    }
  }, [imageZoom])
  return <ImageZoomContext.Provider value={value} {...props} />
}

function useImageZoom() {
  const context = React.useContext(ImageZoomContext)
  if (!context) {
    throw new Error("useImageZoom must be used within a ImageZoomProvider")
  }
  const { imageZoom, setImageZoom } = context
  return { imageZoom, setImageZoom }
}

export { ImageZoomProvider, useImageZoom }
