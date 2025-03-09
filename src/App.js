// /*
// <div id="parent">
// <div id="child">
// <h1>I'm an h1 tag</h1>
// <h2>I'm an h1 tag</h2> both are these siblings of above child div and how can we add second children inside a child div
// </div>

// <div id="child2">
// <h1>I'm an h1 tag</h1>
// <h2>I'm an h1 tag</h2> both are these siblings of above child div and how can we add second children inside a child div
// </div>

// </div>
// *
// *ReactElement(object)=>HTML(Browser understands)
//  ALL THE ABOVE CODE ARE NESTED STURUCTURE
// */
// import React from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import About from "./components/About";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const AppLayout = () => {
//   return (
//     <div className="app">
//       <Header />
//       <Body />
//     </div>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurentMenu";

// import RestaurantMenu from "./Components/RestaurantMenu";
/*
Header
   -logo
   -Nav Bar
Body
   -Search
   -Restaurante Container
   -Restaurant Card
Footer
   -Copyright
   - Linkes
   -Address
   -Contact      
*/

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
