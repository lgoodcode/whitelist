// Import Inter variable font and Titillium in index.css
import type { PaletteColor, PaletteColorOptions } from '@mui/material'
import ComponentTheme from './ComponentTheme'
import StyleTheme from './StyleTheme'

export { StyleTheme, ComponentTheme }

declare module '@mui/material/styles' {
   interface Palette {
      tertiary?: PaletteColor
   }
   // allow configuration using `createTheme`
   interface PaletteOptions {
      tertiary?: PaletteColorOptions
   }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
   interface ButtonPropsColorOverrides {
      tertiary: true
   }
}
