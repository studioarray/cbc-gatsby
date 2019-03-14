// This function returns true if the inputString is a partial match against sourceString.
// Otherwise it returns false.
const isMatch = (sourceString, inputString) =>
  sourceString.match(inputString) ? true : false
export default isMatch
