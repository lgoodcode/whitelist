import { styled, Typography } from '@mui/material'

const Content = styled(Typography)({
   overflow: 'hidden',
   maxHeight: '8rem',
   display: '-webkit-box',
   textOverflow: 'ellipsis',
   WebkitBoxOrient: 'vertical',
   WebkitLineClamp: '5'
})

export default ({ text }: { text: string | React.ReactNode }) => <Content>{text}</Content>
