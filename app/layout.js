import '../styles/globals.css';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
    return <html lang="en">
        <body>
            <section>
                <Navbar />
                { children }
                <Footer />
            </section>
        </body>
    </html>
}