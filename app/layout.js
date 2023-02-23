import '../styles/globals.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import getCameraTypes from '../utils/products/cameraTypes'
import { AnalyticsWrapper } from '../components/Analytics';

export default async function Layout({ children }) {
    const cameraTypes = await getCameraTypes()

    return <html lang="en">
        <body className='h-screen flex flex-col'>
            <header className='sticky top-0 z-40'>
                <Navbar cameraTypes={cameraTypes} />
            </header>
            <main className='flex-1 z-0'>
                { children }
            </main>
            <Footer />
            <AnalyticsWrapper />
        </body>
    </html>
}
