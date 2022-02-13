import type { Theme } from '@mui/material'

export default (theme: Theme): Theme =>
   Object.assign({}, theme, {
      components: {
         MuiContainer: {
            styleOverrides: {
               root: {
                  [theme.breakpoints.up('xs')]: {
                     paddingLeft: 24,
                     paddingRight: 24
                  },
                  [theme.breakpoints.up('sm')]: {
                     paddingLeft: 30,
                     paddingRight: 30
                  },
                  [theme.breakpoints.up('md')]: {
                     paddingLeft: 36,
                     paddingRight: 36
                  }
               }
            }
         },
         MuiListItemSecondaryAction: {
            styleOverrides: {
               root: {
                  right: 24
               }
            }
         }
      }
   })
