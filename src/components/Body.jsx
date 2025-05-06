import React from 'react';

import MainContainer from './MainContainer';
import Sidebar from './Sidebar';

const Body = () => {
  return (
    <div style={{display:"flex"}}>
      
      <Sidebar />
      <MainContainer />
      
    </div>
  );
};

export default Body;