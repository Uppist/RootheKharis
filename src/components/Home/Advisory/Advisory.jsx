/** @format */

import React from "react";
import styles from "./Advisory.module.css";
import { Link } from "react-router-dom";

export default function Advisory() {
  return (
    <section className={styles.advisory}>
      <div className={styles.div}>
        <h2>
          World-class Legal
          <br /> Advisory, Tailored
          <br /> To Local Needs.
        </h2>

        <span>Let us be your legal partner in Africa.</span>
      </div>
      <Link to='/services'>
        <div className={styles.div2}>
          <span>
            View Services
            <svg
              width='32'
              height='32'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.66666 7.99992H13.3333M8.66666 3.33325L13.3333 7.99992L8.66666 12.6666'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </span>
        </div>
      </Link>
    </section>
  );
}
