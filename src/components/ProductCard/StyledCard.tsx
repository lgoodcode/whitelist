import { styled, Card } from '@mui/material'
import type { Theme } from '@mui/material'

const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => ({
  height: '100%',
  minWidth: 320,
  maxWidth: 320,
  backgroundColor: 'background.paper',
  transition: '0.3s',
  boxShadow: theme.shadows[10],
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow:
      '0px 6px 6px -3px rgb(241 237 237 / 15%), 0px 10px 20px 1px rgb(255 255 255 / 7%), 0px 4px 15px 2px rgb(255 255 255 / 23%)'
  }
}))

export default StyledCard
