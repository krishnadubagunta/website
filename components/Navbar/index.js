import Typography from "@material-ui/core/Typography"
import Box from '@material-ui/core/Box'
import Link from '../../components/Link'
import AmpSocial from "../../components/Social"
import Flexbox from "../../components/Flexbox"

export default function Navbar() {
  return <Box>
    <Flexbox direction='row' align='flex-end' secondaryAlign='space-between'>
      <Box mt={4}>
        <Link href='/' passHref>
          <Typography
            variant='h4'
            component='strong'
          >
            kd photography
          </Typography>
        </Link>
      </Box>
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
