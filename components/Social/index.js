import Component from './component'
import Link from 'next/link'

export default function SocialContainer({ social, href }) {
  return <Component>
    <Link href={href} passHref target='blank' rel='noopener'>
        { social }
    </Link>
  </Component>
}