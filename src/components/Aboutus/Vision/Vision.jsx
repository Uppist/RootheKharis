/** @format */

import React from "react";
import styles from "./Vision.module.css";
import image from "../../../assets/About/Vision/vision1.png";
import Mark from "../../Service/Mark";

export default function Vision() {
  const care = [
    "Client-centricity: prioritizing the needs, growth, and success of clients’ businesses.",
    "Adaptability and integrity: RKP is committed to delivering forward-thinking and modern legal solutions while maintaining ethical practices and building trust;",
    "Responsibility: long-term commitment to delivering high-quality services that are not only beneficial today but also contribute to the well-being of future generations.",
    "Excellence and expertise: delivering superior quality in all aspects of service through the deep understanding of both local and international legal frameworks.",
  ];
  return (
    <section className={styles.vision}>
      <div className={styles.our}>
        <img src={image} alt='' />

        <div>
          <div>
            <h3>Our Vision</h3>
            <p>
              To deliver innovative, sustainable, and client-centered legal
              solutions, empowering businesses to navigate local and
              international complexities with global standards of efficiency,
              professionalism, and excellence.
            </p>
          </div>
          <div>
            <h3>Our Mission</h3>
            <p>
               To provide tailored legal solutions that support the growth of
              businesses by leveraging innovation, sustainable practices, and
              global standards, and a deep understanding of local and
              international legal complexities.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Our Core Values</h3>
        <label htmlFor=''>C.A.R.E</label>
        <div className={styles.lists}>
          {care.map((data, id) => (
            <div>
              <Mark />
              <span className={styles.care}>{data}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
