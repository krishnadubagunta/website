import Link from '../../components/Link'
import AmpSocial from "../../components/Social"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Navbar({ invert }) {
  const { pathname } = useRouter()
  const path = pathname.split('/')[1] || 'home'
  const [socials, setSocials] = useState(undefined)

  useEffect(() => {
    setSocials(<>
      <AmpSocial
        social={<div className='fa-brands fa-instagram' />}
        href='https://www.instagram.com/kridsphotography'
        description='Instagram'
      />
      <AmpSocial
        social={<div className='fa-brands fa-twitter' />}
        href='https://www.twitter.com/kridsphotos'
        description='Twitter'
      />
    </>)
  }, [])

  return <nav className='bg-gray-900 px-4 sticky top-0'>
    <div className='flex items-center justify-between pt-8 pb-4'>
        <Link href='/' passHref className='z-40 cursor-pointer'>
          <span className='text-3xl text-left text-white font-bold antialiased'>Krishna Dubagunta</span>
        </Link>
      <div className='flex items-stretch pr-2 z-40'>
        {
          ['home', 'photography'].map((pathSlug) => <div className='mx-1 md:mx-2' key={pathSlug}>
            <Link href={`/${pathSlug === 'home' ? '' : pathSlug}`} passHref shallow>
                <span className={`text-white ${pathSlug===path ? 'font-normal' : 'font-light'}`}>{pathSlug}</span>
            </Link>
          </div>)
        }
        { socials }
      </div>
    </div>
  </nav>
}
