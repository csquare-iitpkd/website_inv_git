
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const otherPagesBackground = 'bg-fixed bg-cover bg-center';

  return (
    <div 
      
      className={!isHomePage ? otherPagesBackground : ''} 
      style={!isHomePage ? { backgroundImage: `url("/assets/bc.jpg")` } : {}}
    >
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;