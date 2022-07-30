import { grey } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
      type: 'dark',
      primary: grey,
    },
    typography: {
      fontFamily: [
        'Source Sans Pro',
        '-apple-system',
      ].join(',')
    },
})
