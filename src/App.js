import { BrowserRouter, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./containers/Header";
import "./App.css";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <h1>404 Not Found</h1>,
      children: [
        {
          index: true,
          element: <ProductListing />,
        },
        {
          path: 'products/:productId', 
          element: <ProductDetail/>
        },
      ]
    }
  ]);


  return (
    <>
      <h1>Hello World</h1>
      <Header/>
      <RouterProvider router={router}/>
      <Outlet/>
    </>
  );
}

export default App;
