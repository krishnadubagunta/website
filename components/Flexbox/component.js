import { styled } from '@mui/material/styles'

export default styled('div')(({ direction = 'row', align = 'stretch', justifyContent = 'flex-start' }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justifyContent,
  flexDirection: direction,
}))