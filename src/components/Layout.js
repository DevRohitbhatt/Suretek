import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className='' }) => {
    return (
        <>
        <div className={`container ${className}`}>
            <Header />
            <main>
                {children}
            </main>
        </div>
        <Footer />
        </>
        
    );
};

export default Layout;
