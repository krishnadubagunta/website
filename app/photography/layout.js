import '../../styles/globals.css';
import Sidebar from '../../components/Sidebar';
import EmailBanner from '../../components/Banner/EmailBanner';

export default function Layout({ children }) {
    return <section className='flex flex-col h-full overflow-auto'>
        <div className='flex h-full'>
            <div className='sm:w-1/12'>
                <Sidebar />
            </div>
            <div className='w-11/12'>
                {children}
            </div>
        </div>
        <EmailBanner />
    </section>
}