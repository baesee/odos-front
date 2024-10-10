import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Contents from './Contents';
import './Layout.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="container">
            <Header />
            <Contents>{children}</Contents>
            <Footer />
        </div>
    );
};

export default Layout;
