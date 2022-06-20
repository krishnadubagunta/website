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

export default TimelineRight