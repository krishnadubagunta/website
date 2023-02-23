import '../../../styles/globals.css';
import Sidebar from '../../../components/Sidebar';

export default function Layout({ children, params }) {
    return <section className='flex h-full overflow-auto'>
        <div className='sm:w-1/12'>
            <Sidebar cameraType={params.cameraType} />
        </div>
        <div className='w-11/12'>
            { children }
        </div>
    </section>
}