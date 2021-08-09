import { grey } from '@material-ui/core/colors'
import { createTheme } from '@material-ui/core/styles'

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
