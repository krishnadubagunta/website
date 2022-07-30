import { Children } from 'react'
import Card from '../components/Card'

const Section = ({ children, title }) => {
return <div className='divide-dashed divide-gray-600 divide-y py-2'>
  <div className='py-2'>
    <section className='container'>
      <span className='text-2xl text-semibold'>
        { title }
      </span>
    </section>
  </div>
  {
    Children.map(children, (child) => <SectionChildren>
      { child }
    </SectionChildren>)
  }
</div>
}

const SectionChildren = ({ children }) => <div className='m-2 '>
  { children }
</div>

const Development = () => {
  return <div className='flex flex-col h-full py-4 divide-solid divide-gray-800 divide-y'>
    <div className='py-2 w-11/12'>
      <section className='container prose'>
        <span className='prose-2xl'>
          Examples
        </span>
      </section>
    </div>
    <Section title='Card'>
      <div className='divide-y-2 divide-dotted divide-gray-400'>
        <section className='container prose flex flex-col py-1'>
          <span className='text-xl'>
            Card with title and content
          </span>
          <div className='py-1'>
            <Card id="card-with-title-and-content">
              <span className='justify-center text-lg'>Card Title</span>
              <div className='py-2'>
                <span className='text-sm'>Card Content</span>
              </div>
            </Card>
          </div>
        </section>
        <section className='container prose flex flex-col py-1'>
          <span className='text-xl'>
            Card with Image
          </span>
        <div className='py-1'>
          <Card imageUrl='/images/web/hero.jpg' width={75} height={100} />
        </div>
      </section>
      </div>
    </Section>
    <Section title='Typography' />
  </div>
}

export default Development