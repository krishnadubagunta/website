import Link from '../../components/Link'
import AmpSocial from "../../components/Social"
import RoutedLinks from './hightlightedLinks'
import { Suspense } from 'react'

export default function Navbar({ invert }) {
  return <nav className='bg-gray-900 px-4 sticky top-0 z-40'>
    <div className='flex items-center justify-between pt-8 pb-4'>
        <Link href='/' passHref className='z-40 cursor-pointer'>
          <span className='text-3xl text-left text-white font-bold antialiased'>Krishna Dubagunta</span>
        </Link>
      <div className='flex items-stretch pr-2'>
        <RoutedLinks />
        <AmpSocial
          href='https://www.instagram.com/kridsphotography'
          description='Instagram'
        >
          <Suspense fallback={<></>}>
            <div className='fa-brands fa-instagram' />
          </Suspense>
        </AmpSocial>
        <AmpSocial
          href='https://www.twitter.com/kridsphotos'
          description='Twitter'
        >
          <Suspense fallback={<></>}>
            <div className='fa-twitter fa-brands' />
          </Suspense>
        </AmpSocial>
      </div>
    </div>
  </nav>
}
