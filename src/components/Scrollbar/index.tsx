import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { styled } from '@mui/material/styles'
import type { PaletteMode } from '@mui/material'

// TODO: simplify this
const StyledScrollbar = (mode: PaletteMode) =>
   styled(SimpleBar)({
      '& .simplebar-scrollbar:before': {
         backgroundColor: mode === 'dark' ? '#fff' : '#000'
      }
   })

export default ({ mode, children }: { mode: PaletteMode; children: React.ReactNode }) => {
   const Bar = StyledScrollbar(mode)

   return <Bar style={{ height: '100vh' }}>{children}</Bar>
}
