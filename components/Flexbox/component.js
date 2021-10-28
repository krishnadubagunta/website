import { styled } from '@mui/material/styles'

export default styled('div')(({ direction = 'row', align = 'stretch', secondaryAlign = 'flex-start' }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: secondaryAlign,
  flexDirection: direction,
}))