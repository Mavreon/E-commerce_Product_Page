import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";
import CartContextProvider from "./context/CartContextProvider";
import Product from "./components/Product/Product";
import product1 from './images/image-product-1.jpg'
import product2 from './images/image-product-2.jpg'
import product3 from './images/image-product-3.jpg'
import product4 from './images/image-product-4.jpg'

function App() {
  const productData = {
    company: 'Sneakers Company',
    images: [product1,product2, product3,product4],
    name: 'Sneakers',
    title: "Fall Limited Edition",
    summary:`These low-profile sneakers are your perfect casual wear
    companion. Featuring a durable rubber outer sole, they'll
    withstand everything the weather can offer.`,
    unitPrice: 250,
    percentOff: 50
}
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-commerce Product Page</title>
      </Helmet>
      <CartContextProvider>
        <Navbar/>
        <Product productData={productData}/>
        
      </CartContextProvider>
    </React.Fragment>
  );
}

export default App;
