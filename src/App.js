import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-commerce Product Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Navbar/>
    </React.Fragment>
  );
}

export default App;
