import Component from './component'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialContainer({ social, description, href }) {
  return <Component>
    <Link href={href} passHref>
      <Image
        src={`/${social}.png`}
        width='45'
        height='45'
        layout='responsive'
        alt={description}
      />
    </Link>
  </Component>
}