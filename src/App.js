import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-commerce Product Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <CartContextProvider>
        <Navbar/>
      </CartContextProvider>
    </React.Fragment>
  );
}

export default App;
