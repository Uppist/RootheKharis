/** @format */

import React from "react";
import styles from "./About.module.css";
import Commit from "./Commitment/Commit";
import Vision from "./Vision/Vision";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import About from "./About/About";

export default function Aboutus() {
  return (
    <div className={styles.bg}>
      <div className={styles.bg2}>
        <NavBar />
        <About />
        <Commit />
        <Vision />
        <Footer />
      </div>
    </div>
  );
}
