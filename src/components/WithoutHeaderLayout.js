import React from 'react';
import Footer from './Footer';

const WithoutHeaderLayout = ({ children }) => {
    return (
        <>
        <div className='container'>
            <main>
                {children}
            </main>            
        </div>
        <Footer />
        </>
    );
};

export default WithoutHeaderLayout;
