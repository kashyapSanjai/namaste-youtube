import logo from './logo.svg';
// import './App.css';
import {Provider} from "react-redux"
import Head from './components/Head';
import Body from './components/Body';
import store from './utills/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

function App() {
  // const appRouter = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<App/>,
  //     children:[
  //       {
  //         path:"/",
  //         element:<MainContainer/>
  //       },
  //       {
  //         path:"watch",
  //         element:<WatchPage/>
  //       }
  //     ]
  //   }
  // ]);
  return (
    <Provider store={store}>
      <div>
      {/* <h1 className='text-3xl font-bold'>Namste Youtube</h1> */}
      <div>
        <Head/>
        {/* <RouterProvider router={appRouter} /> */}
        <Body/>
      </div>
    </div>
    </Provider> 
  );
}

export default App;


{
  /***
   * Head
   * Body
   *    Sidebar
   *      MenuItems
   *    MainContainer
   *      VideoContainer
   *        VideoCard Component
   * 
   */
 }
