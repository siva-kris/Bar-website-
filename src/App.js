import React from "react";
import Navbar1 from "./Navbar/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Routes } from "react-router-dom";
import Head from "./Header/Head";
import Head2 from "./Header2/Head2";
import "./App.css";
function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar1 />
      <Head />
      <Head2 />
      {/* <Routes> */}
      {/* <Route exact path="/" component={Homepage} />
          <Route exact path="/review/cart" component={CartReview} />
          <Route exact path="/food/details/:keys" component={FoodDetails} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={Notfound} /> */}
      {/* </Routes>
      </Router> */}
    </>
  );
}

export default App;
