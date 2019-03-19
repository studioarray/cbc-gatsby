import { useStateValue } from "../utils/state"
import { PropTypes } from "prop-types"

const ChangeLogoColour = ({ newColour }) => {
  // try {
  const [{ logoColour }, dispatch] = useStateValue()
  if (logoColour !== newColour) {
    dispatch({
      type: "changeColour",
      newColour,
    })
  }
  return null
  // } catch (error) {
  //   console.log(error)
  //   return null
  // }
}

ChangeLogoColour.propTypes = {
  newColour: PropTypes.string.isRequired,
}

export default ChangeLogoColour
