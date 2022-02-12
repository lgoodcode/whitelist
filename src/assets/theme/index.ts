// Import Inter variable font and Titillium in index.css
import 'assets/fonts/Inter/Inter-Var.ttf'
import ComponentTheme from './ComponentTheme'
import StyleTheme from './StyleTheme'

export { StyleTheme, ComponentTheme }

// declare module '@mui/material/styles' {
//   interface Palette {
//     dark: Palette['text']
//   }
//   // allow configuration using `createTheme`
//   interface PaletteOptions {
//     dark: PaletteOptions['text']
//   }
// }

// // Update the Button's color prop options
// declare module '@mui/material/Button' {
//   interface ButtonPropsColorOverrides {
//     sheenGold: true
//   }
// }

// // TODO: look into why this isn't working
// // Update the Typography's color prop options
// declare module '@mui/material/Typography' {
//   interface TypographyPropsColorOverrides {
//     sheenGold: true
//   }
// }
