
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const otherPagesBackground = 'bg-fixed bg-cover bg-center';

  return (
    <div 
      
      className={!isHomePage ? otherPagesBackground : ''} 
      style={!isHomePage ? { backgroundImage: `url("/assets/bc.jpg")` } : {}}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
