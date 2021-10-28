import Component from './component'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialContainer({ social, description, href }) {
  return <Component>
    <Link href={href} passHref>
      <a target='blank' rel='noopener'>
        { social }
      </a>
    </Link>
  </Component>
}