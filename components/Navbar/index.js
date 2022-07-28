import Typography from "@mui/material/Typography"
import Box from '@mui/material/Box'
import Link from '../../components/Link'
import AmpSocial from "../../components/Social"
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import Flexbox from "../../components/Flexbox"
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles'

const InvertedTypography = styled('h2')(({ invert = false }) => ({
  filter: `invert(${invert ? 1 : 0})`,
  fontSize: 24,
  textAlign: 'left',
  fontWeight: '700',
}))

export default function Navbar({ invert }) {
  const { pathname } = useRouter()
  const path = pathname.split('/')[1] || 'home'

  return <>
    <div className='flex items-center justify-between'>
      <div className='ml-2 z-40'>
        <Link href='/' passHref>
          <span className='text-3xl text-left font-bold antialiased'>Krishna Dubagunta</span>
        </Link>
      </div>
      <div className='flex items-stretch pr-2 z-40'>
        {
          ['home', 'photography'].map((pathSlug) => <div className='mx-1 md:mx-2' key={pathSlug}>
            <Link href={`/${pathSlug === 'home' ? '' : pathSlug}`} passHref shallow>
              <a>
                <span className={pathSlug==path ? 'font-normal' : 'font-light'}>{pathSlug}</span>
              </a>
            </Link>
          </div>)
        }
        <AmpSocial
          social={<InstagramIcon />}
          href='https://www.instagram.com/kridsphotography'
          description='Instagram'
        />
        <AmpSocial
          social={<TwitterIcon />}
          href='https://www.twitter.com/kridsphotos'
          description='Twitter'
        />
      </div>
    </div>
  </>
}
