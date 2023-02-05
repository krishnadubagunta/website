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


TimelineLeft.displayName = 'TimelineLeft'

export default TimelineLeft