/** @format */

import React from "react";

import Home from "./components/Home/Home";
import Contactus from "./components/Contact/Contactus";
import Services from "./components/Service/Services";
import Aboutus from "./components/Aboutus/Aboutus";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blog/Blogs";
import Detail from "./components/Blog/Details/Detail";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/services' element={<Services />} />
        <Route path='/Articles' element={<Blogs />} />
        <Route path='/blog-details' element={<Detail />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
    </HashRouter>
    // <>
    //   {/* <Services /> */}
    //   {/* <Contactus /> */}
    //   {/* <Home /> */}
    //   <Aboutus />
    // </>
  );
}
