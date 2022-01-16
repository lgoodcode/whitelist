import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import type { ThemeOptions } from '@mui/material/styles'

// Inter font
import 'assets/fonts/Inter-Var.ttf'

export const themeDark: ThemeOptions = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily:
        'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue'
    },
    palette: {
      text: {
        primary: '#fff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)'
      },
      primary: {
        main: '#b38615'
      },
      secondary: {
        main: '#eaeaea'
      },
      divider: 'rgba(255,255,255,0.2)',
      background: {
        default: '#303030',
        paper: '#231f20'
      }
    }
  })
)

export const themeLight: ThemeOptions = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily:
        'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue'
    },
    palette: {
      primary: {
        main: '#b38615'
      },
      secondary: {
        main: '#eaeaea'
      },
      divider: 'rgba(0, 0, 0, 0.2)'
    }
  })
)
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
