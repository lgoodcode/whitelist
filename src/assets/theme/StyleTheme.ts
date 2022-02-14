import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import type { PaletteMode, Theme } from '@mui/material'
import ButtonOverridesDark from './ButtonOverridesDark'

// Used to create custom colors with generated shades and text color
const { palette } = createTheme()

export default (mode: PaletteMode): Theme =>
   responsiveFontSizes(
      createTheme({
         typography: {
            fontFamily: [
               'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue',
               'Titillium Web, Helvetica, Arial, Lucida, sans-serif'
            ].join(',')
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
            mode,
            ...Object.assign(
               {
                  // Makes the error darker for better contrast
                  error: {
                     main: '#e70f00'
                  }
               },
               mode === 'dark'
                  ? {
                       text: {
                          primary: '#fff',
                          secondary: 'rgba(255, 255, 255, 0.7)',
                          disabled: 'rgba(255, 255, 255, 0.5)'
                       },
                       primary: {
                          main: '#5cfff3'
                       },
                       secondary: {
                          main: '#4328b7'
                       },
                       tertiary: palette.augmentColor({
                          color: {
                             main: '#e5e5e5'
                          }
                       }),
                       divider: 'rgba(255,255,255,0.2)',
                       background: {
                          default: '#101535',
                          paper: '#1a245e'
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
                    }
            )
         },
         components: {
            ...(mode === 'dark' && {
               MuiSvgIcon: {
                  styleOverrides: {
                     root: {
                        color: '#fff'
                     }
                  }
               },
               MuiButtonBase: ButtonOverridesDark,
               MuiIconButton: ButtonOverridesDark,
               MuiFab: ButtonOverridesDark,
               MuiButton: {
                  styleOverrides: {
                     root: {
                        ':disabled': {
                           pointerEvents: 'unset',
                           cursor: 'not-allowed',
                           color: 'rgb(255 255 255 / 0.8)',
                           background: 'rgb(255 255 255 / 0.2)'
                        }
                     },
                     containedInherit: {
                        color: '#000'
                     }
                  }
               }
            })
         }
      })
   )
