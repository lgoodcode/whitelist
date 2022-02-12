import { styled, Card } from '@mui/material'
import type { Theme } from '@mui/material'

const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => ({
   height: '100%',
   width: '100%',
   background: 'linear-gradient(180deg, #2b2996 0%, #1b1f50 70%)',
   transition: '0.3s',
   boxShadow: theme.shadows[10],
   '&:hover': {
      transform: 'scale(1.02)',
      boxShadow:
         '0px 5px 5px -3px rgb(112 169 179 / 14%), 0px 8px 18px 1px rgb(112 169 179 / 15%), 0px 4px 12px 2px rgb(112 169 179 / 23%)'
   }
}))

export default StyledCard
