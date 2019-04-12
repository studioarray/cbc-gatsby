import React, { useState, useRef, useEffect, useMemo } from "react"
import posed from "react-pose"
import useComponentSize from "@rehooks/component-size"
import useWindowSize from "../hooks/useWindowSize"

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99],
}
const ZoomContainer = posed.div({
  zoomedIn: {
    applyAtStart: { zIndex: 1000 },
    position: "fixed",
    top: ({ zoomedSize }) => `calc(50% - ${zoomedSize.height / 2}px)`,
    left: ({ zoomedSize }) => `calc(50% - ${zoomedSize.width / 2}px)`,
    bottom: 0,
    width: ({ zoomedSize }) => zoomedSize.width,
    flip: true,
    transition,
  },
  zoomedOut: {
    applyAtStart: { zIndex: 1000 },
    position: "static",
    width: "auto",
    height: "auto",
    flip: true,
    transition,
  },
})
const ZoomBackground = posed.div({
  zoomedIn: {
    applyAtStart: { zIndex: 999, display: "block" },
    opacity: 1,
    transition,
  },
  zoomedOut: {
    applyAtEnd: { zIndex: "auto", display: "none" },
    opacity: 0,
    transition,
  },
})
export default ({ children }) => {
  let ref = useRef(null)
  let size = useComponentSize(ref)
  let windowSize = useWindowSize()
  const [zoom, setZoom] = useState(false)
  const [aspectRatio, setAspectRatio] = useState(0)
  const [placeHolderHeight, setPlaceHolderHeight] = useState(size.height)
  const pose = zoom ? "zoomedIn" : "zoomedOut"

  useEffect(() => {
    // Update placeholder height and aspect ratio only when not zoomed
    if (!zoom) {
      setPlaceHolderHeight(size.height)
      setAspectRatio(Number((size.width / size.height).toFixed(5)))
    }
  }, [size])

  useEffect(() => {
    if (zoom) {
      window.addEventListener("wheel", () => setZoom(false))
      document.body.classList.add("locked")
    } else {
      window.removeEventListener("wheel", () => setZoom(false))
      document.body.classList.remove("locked")
    }
  }, [zoom])

  const zoomedSize = useMemo(() => {
    // Size of zoomed artwork
    const width = Math.round(aspectRatio * windowSize.height)
    const height = Math.round(windowSize.width / aspectRatio)
    return {
      width: width >= windowSize.width ? windowSize.width : width,
      height: height >= windowSize.height ? windowSize.height : height,
    }
  }, [windowSize.height, windowSize.width, aspectRatio])

  return (
    <div style={{ height: `${placeHolderHeight}px` }}>
      <ZoomBackground
        className={`zoom-background`}
        pose={pose}
        onClick={() => setZoom(!zoom)}
      />
      <ZoomContainer
        onClick={() => setZoom(!zoom)}
        pose={pose}
        poseKey={zoomedSize}
        ref={ref}
        zoomedSize={zoomedSize}
        className={`zoom-container__${pose.toLowerCase()}`}
      >
        {children}
      </ZoomContainer>
    </div>
  )
}
