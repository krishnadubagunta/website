'use client';
import Link from '../../components/Link'
import { usePathname } from 'next/navigation'

export default function RoutedLinks() {
  const pathname = usePathname()
  const path = pathname.split('/')[1] || 'home'

  return <>
    {
      ['home', 'photography'].map((pathSlug) => <div className='mx-1 md:mx-2' key={pathSlug}>
          <Link href={`/${pathSlug === 'home' ? '' : pathSlug}`} passHref shallow>
              <span className={`text-white ${pathSlug===path ? 'font-normal' : 'font-light'}`}>{pathSlug}</span>
          </Link>
      </div>)
    }
  </>
  
}