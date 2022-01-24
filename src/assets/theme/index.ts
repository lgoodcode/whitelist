import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import type { ThemeOptions } from '@mui/material/styles'

// Inter font
import 'assets/fonts/Inter-Var.ttf'
import type { PaletteMode } from '@mui/material'

const Theme = (mode: PaletteMode): ThemeOptions =>
  responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily:
          'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue'
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1280,
          xl: 1536
        }
      },
      palette: {
        ...(mode === 'dark'
          ? {
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
          : {
              primary: {
                main: '#b38615'
              },
              secondary: {
                main: '#eaeaea'
              },
              divider: 'rgba(0, 0, 0, 0.2)'
            })
      }
    })
  )

export default Theme

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
