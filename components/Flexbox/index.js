import Component from './component'

export default function Flexbox({ direction, align, secondaryAlign, children }) {
  return <Component
    direction={direction}
    align={align}
    justifyContent={secondaryAlign}
  >
    { children }
  </Component>
}