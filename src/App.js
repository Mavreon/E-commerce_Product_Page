import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";
import CartContextProvider from "./context/CartContextProvider";
import Product from "./components/Product/Product";

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
        {/* <Product/> */}
      </CartContextProvider>
    </React.Fragment>
  );
}

export default App;
