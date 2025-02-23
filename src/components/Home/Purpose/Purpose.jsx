/** @format */

import React from "react";
import styles from "./Purpose.module.css";
import image from "../../../assets/Home/Purpose/Purpose.png";
import { Link } from "react-router-dom";

export default function Purpose() {
  return (
    <section className={styles.purpose}>
      <div className={styles.img}>
        <img src={image} alt='' />
      </div>
      <div className={styles.text}>
        <div>
          <label htmlFor=''>About Our Law Firm</label>
          <h2>Our Purpose</h2>
        </div>
        <p>
          Roothe-Kharis & Partners exist to help corporates, SMEs and
          individuals navigate complexities, seize opportunities, and achieve
          their goals with confidence.{" "}
        </p>{" "}
        <p>
          From boardrooms to the fields, we expertly deliver tailored legal
          solutions that drive progress, protect interests, and unlock
          possibilities.
        </p>
        <p>Leveraging global standards, we provide local legal solutions!</p>
        <Link to='/aboutus'>
          {" "}
          <button className={styles.button} type='button'>
            Read Full details
            <svg
              width='32'
              height='32'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2.66666 7.99992H13.3333M8.66666 3.33325L13.3333 7.99992L8.66666 12.6666'
                stroke='#B8824F'
                stroke-width='1'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}
