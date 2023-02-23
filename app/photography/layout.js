import '../../styles/globals.css';
import Sidebar from '../../components/Sidebar';

export default function Layout({ children, params }) {
    return <section className='flex flex-col h-full overflow-auto'>
        <div className='flex h-full'>
            <div className='sm:w-1/12'>
                <Sidebar cameraType={params.cameraType} />
            </div>
            <div className='w-11/12'>
                {children}
            </div>
        </div>
        <div className='flex w-screen sm:w-1/2 self-center'>
            <div className="flex p-4 mb-4 text-sm text-gray-400 rounded-lg bg-gray-50" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Something you should know!&nbsp;</span>
                    <span className="font-medium">All images displayed here are available for sale. &nbsp;</span>
                    <span>
                        Send me an email&nbsp;
                        <a className='text-blue-400' href="mailto:dubagunta.saikrishna+orders@outlook.com?subject=Order%20for%20prints">here!</a>
                    </span>
                </div>
            </div>
        </div>
    </section>
}