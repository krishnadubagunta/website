import { useState } from 'react'
import getProducts from '../utils/products'
import ViewportHeightComponent from '../components/ViewportHeight'

export default function Index({ products }) {
  const [openedTab, setOpenedTab] = useState(1)

  return <>
    <div className='mt-4 md:flex md:justify-center'>      
      <span className='md:relative absolute h-screen w-screen md:w-1/2 flex justify-center items-center md:prose text-1xl leading-15 md:leading-none align-center xl:prose-2xl lg:prose-lg md:prose-sm md:text-black-400 text-white font-light'>
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
    </div>
    <div className='mt-8'>
      <div className='w-screen text-center'>
        <span className='prose prose-2xl font-semibold'>Projects</span>
      </div>
    </div>
  </>
}
