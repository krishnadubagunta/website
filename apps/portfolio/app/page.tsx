import Container from 'kd-ui/ui/layout/container'
import Content from './content.mdx'

export default async function Home() {
  return (
    <div className='pt-6 flex items-center'>
      <Content />
    </div>
  )
}
