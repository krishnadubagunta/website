import { useState } from 'react'
import Card from '../components/Card'
import getProducts from '../utils/products'
import ViewportHeightComponent from '../components/ViewportHeight'

const TimelineRight = ({ children, title }) => <div className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-900 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-900 shadow"
                ></div>
              </div>
              <div
                className="bg-gray-100 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md"
              >
                <h3 className="font-normal text-lg mb-1">{ title }</h3>
                <p className="leading-tight text-justify text-sm font-light">
                  { children }
                </p>
              </div>
            </div>

const TimelineLeft = ({ children, title }) => <div className="flex flex-row-reverse md:contents">
              <div
                className="bg-gray-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md"
              >
                <h3 className="font-normal text-lg mb-1">{ title }</h3>
                <p className="leading-tight text-justify font-light text-sm">
                  { children }
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-900 pointer-events-none"></div>
                </div>
                <div
                  className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-900 shadow"
                ></div>
              </div>
            </div>

export default function Index() {
  return <>
    <section className='my-6 md:flex md:justify-center'>      
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
    </section>
    <section className='my-6'>
      <div className='my-4'>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-gray-800">
          {/* <!-- left --> */}
          <TimelineLeft title='Lorem ipsum'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
          </TimelineLeft>
          {/* <!-- right --> */}
          <TimelineRight title='Lorem ipsum'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vitae, facilis.
          </TimelineRight>
          {/* <!-- left --> */}
          <TimelineLeft title='Lorem ipsum'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
          </TimelineLeft>
          {/* <!-- left --> */}
          <TimelineLeft title='Lorem ipsum'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
          </TimelineLeft>
          {/* <!-- right --> */}
          <TimelineRight title='Lorem ipsum'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Vitae, facilis.
          </TimelineRight>
        </div>
      </div>
    </section>
  </>
}
