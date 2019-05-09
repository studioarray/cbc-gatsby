import React from "react"
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link"
import posed from "react-pose"

const Fade = posed.div({
  hidden: {
    opacity: 0,
    transition: {
      opacity: { duration: 300 },
    },
  },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 300 },
    },
  },
})

export const FadeWrapper = ({ children }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <Fade
          pose={
            ["entering", "entered"].includes(transitionStatus)
              ? "visible"
              : "hidden"
          }
        >
          {children}
        </Fade>
      )}
    </TransitionState>
  )
}

export const Link = props => (
  <TransitionLink
    to={props.to}
    exit={{ length: 0.3 }}
    entry={{ delay: 0.3 }}
    {...props}
  >
    {props.children}
  </TransitionLink>
)
