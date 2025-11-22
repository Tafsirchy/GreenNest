import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Plants = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen'>
                <h1>Coming Soon</h1>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Plants;