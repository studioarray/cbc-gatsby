import Typography from "typography"

const typography = new Typography({
  title: "CBC Type Theme",
  baseFontSize: "10px",
  baseLineHeight: 1.618,
  googleFonts: [
    {
      name: "Lato",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: [
    "Lato",
    "Lucida Grande",
    "Helvetica",
    "Arial",
    "Sans-serif",
  ],
  bodyFontFamily: ["Lato", "Lucida Grande", "Helvetica", "Arial", "sans-serif"],
})

export const { scale, rhythm, options } = typography
export default typography
