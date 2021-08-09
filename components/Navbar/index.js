import Typography from "@material-ui/core/Typography"
import Box from '@material-ui/core/Box'
import AmpSocial from "../../components/Social"
import Flexbox from "../../components/Flexbox"

export default function Navbar() {
  return <Box px={4}>
    <Flexbox direction='row' align='flex-end' secondaryAlign='space-between'>
    <Typography
      variant='h4'
      component='strong'
      mt={4}
    >
      kd photography
    </Typography>
    <Flexbox align='stretch'>
      <AmpSocial
        social='instagram'
        href='https://www.instagram.com/kridsphotography'
        description='Instagram'
      />
      <AmpSocial
        social='twitter'
        href='https://www.twitter.com/kridsphotos'
        description='Twitter'
      />
    </Flexbox>
  </Flexbox>
  </Box>
}
