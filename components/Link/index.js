import NextLink from 'next/link'
import Component from './component'

export default function Link(props) {
  return <Component>
    <NextLink {...props} />
  </Component>
}