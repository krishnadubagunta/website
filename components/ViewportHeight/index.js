import { styled } from '@mui/material/styles'

const ViewportHeightComponent = styled('div')(({ height = '100%' }) => ({
  position: 'relative',
  marginTop: '16px',
  width: '100%',
  height,
  maxHeight: '85vh'
}))

export default ViewportHeightComponent