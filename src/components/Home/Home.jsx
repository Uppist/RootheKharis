/** @format */

import React from "react";
import NavBar from "../NavBar/NavBar";
import Advisory from "./Advisory/Advisory";
import Purpose from "./Purpose/Purpose";
import Service from "./Services/Service";
import Testimonial from "./Testimonial/Testimonial";
import FAQ from "./FAQ/FAQ";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Advisory />
      <Purpose />
      <Service />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
}
