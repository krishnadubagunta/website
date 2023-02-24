import Link from '../../../components/Link'
import AmpSocial from "../../../components/Social"
import RoutedLinks from './hightlightedLinks'
import { Suspense } from 'react'

export default function Navbar({ cameraTypes }) {
  return <nav className='bg-white px-4 text-black'>
    <div className='flex flex-col items-center justify-between pt-8 pb-4'>
        <Link href='/' passHref className='py-6'>
          <span className='text-3xl tracking-normal sm:tracking-wider text-left font-normal antialiased'>Sai Krishna Dubagunta</span>
        </Link>
      <div className='flex flex-row items-stretch'>
        <Suspense fallback={<></>}>
          <RoutedLinks cameraTypes={cameraTypes} />
        </Suspense>
        <AmpSocial
          href='https://www.instagram.com/kridsphotography'
          description='Instagram'
        >
          <Suspense fallback={<div className='w-25' />}>
            <div className='fa-brands fa-instagram text-black' />
          </Suspense>
        </AmpSocial>
        <AmpSocial
          href='https://www.twitter.com/kridsphotos'
          description='Twitter'
        >
          <Suspense fallback={<div className='w-25' />}>
            <div className='fa-twitter fa-brands text-black' />
          </Suspense>
        </AmpSocial>
      </div>
    </div>
  </nav>
}
