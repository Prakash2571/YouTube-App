import React from 'react';
import Body from './components/Body';
import Head from './components/Head';
import { Provider } from 'react-redux';
import store from './components/utils/Store';
import { createBrowserRouter, RouterProvider } from 'react-router';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';




const App = () => {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:  <Body />,
    children:[{
      path:"/watch",
      element:<WatchPage />
  },
  {
    path:"/",
    element:<MainContainer />
    
  }
 
]
}]);
  return (
    <div>
      <Provider store={store} >
       <Head />
       <RouterProvider router ={appRouter} />
      
        </Provider>

    </div>
  );
};

export default App;