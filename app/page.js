import * as fs from 'fs'
import path from 'path'
import Markdown from 'react-markdown'

export default function Index() {
  const introFiles = path.join(process.cwd(), 'files','intro.md')
  const intromd = fs.readFileSync(introFiles, { encoding: 'utf-8' })

  return <>
    <section className='my-6 md:flex md:justify-center'>      
      <span className='md:relative absolute h-screen w-screen md:w-1/2 flex justify-center items-center md:prose text-1xl leading-15 md:leading-none align-center xl:prose-2xl lg:prose-lg md:prose-sm md:text-black-400 text-white subpixel-antialiased'>
        <span className='font-semibold'>
          Developer
        </span>,&nbsp;
        <span className='font-normal'>
          Designer
        </span>
        &nbsp;&amp;&nbsp;
        <span className='font-semibold'>
          Landscape Photographer
        </span>
      </span>
      <div className='bg-fixed bg-hero bg-center md:bg-right-top bg-no-repeat bg-cover md:bg-contain rounded h-screen md:w-1/2 w-screen' />
    </section>
    <section className='my-6 md:flex md:justify-center'>
      <article className='prose prose-lg text-black-400'>
        <Markdown>
          { intromd }
        </Markdown>
      </article>
    </section>
  </>
}