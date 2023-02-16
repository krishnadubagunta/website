import '../../styles/globals.css';
import './layout.css'

import Sidebar from '../../components/Sidebar';
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Suspense } from 'react';

export default function Layout({ children }) {
    return <section className='flex justify-center'>
        <div className='w-3/12'>
            <Sidebar />
        </div>
        <div className='w-9/12'>
            { children }
        </div>
    </section>
           
}