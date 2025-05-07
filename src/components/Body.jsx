import React from 'react';

import MainContainer from './MainContainer';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router';

const Body = () => {
  return (
    <div style={{display:"flex"}}>
      
      <Sidebar />
      <Outlet />
      
    </div>
  );
};

export default Body;