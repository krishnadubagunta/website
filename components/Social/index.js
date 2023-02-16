import Component from './component'
import Link from 'next/link'

export default function SocialContainer({ children, href }) {
  return <Component>
    <Link href={href} passHref target='blank' rel='noopener'>
        { children }
    </Link>
  </Component>
}