import { Children } from "react";
import Footer from "./components/Footer"
import Home from "./components/Home"
import Layout from "./components/Layout";
import Navbar from "./components/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import ForgetPassword from "./components/ForgetPassword";
import Dash from "./components/Dash";
import AddToCart from "./components/AddToCart";
import Cart from "./components/Cart";



function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        { index: true, element: <Home /> },
        { path: "/menu", element: <Menu /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/forgetpassword", element: <ForgetPassword /> },
        { path: "/dash", element: <Dash /> },
        {path: "/addtocart", element: <AddToCart/> },
        {path: "/cart", element: <Cart /> },
        { path: "*", element: <Error /> }
      ]
    }
  ]);


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
