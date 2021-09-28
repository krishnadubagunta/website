import Component from './component'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialContainer({ social, description, href }) {
  return <Component>
    <Link href={href} passHref>
      <a target='blank' rel='noopener'>
        <Image
          src={`/${social}.png`}
          width='30'
          height='30'
          layout='intrinsic'
          alt={description}
        />
      </a>
    </Link>
  </Component>
}