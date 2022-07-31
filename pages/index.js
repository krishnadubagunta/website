import axios from 'axios'
import Markdown from 'react-markdown'

export default function Index({ intromd }) {

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
      <div className='z-0 bg-fixed bg-hero bg-center md:bg-right-top bg-no-repeat bg-cover md:bg-contain rounded h-screen md:w-1/2 w-screen' />
    </section>
    <section className='my-6 md:flex md:justify-center'>
      <article className='prose dark:prose-invert prose-lg text-black-400'>
        <Markdown>
          { intromd }
        </Markdown>
      </article>
    </section>
  </>
}

export async function getStaticProps() {
  const { data } = await axios.get(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/intro`, {
    responseType: 'json'
  })

  console.log(data)

  return {
    props: {
      intromd: data.introMdData,
    }
  }
}