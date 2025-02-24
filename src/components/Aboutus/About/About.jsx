/** @format */

import React from "react";
import styles from "./About.module.css";
import image from "../../../assets/About/About.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className={styles.about}>
      <div>
        <div className={styles.global}>
          <label htmlFor=''>Who We Are</label>
          <h2>Global standards. Local solutions. Expertly delivered!</h2>
        </div>
        <p>
          Roothe-Kharis & Partners exist to help corporates, SMEs and
          individuals navigate complexities, seize opportunities, and achieve
          their goals with confidence
        </p>
        <p>
          Leveraging on international best practices, we work with clients from
          boardrooms to the fields to curate tailored legal solutions that drive
          meaningful progress, protect interests, and unlock possibilities.
        </p>

        <Link to='/contactus'>
          <button className={styles.button}>
            Contact Us
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
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </Link>
      </div>
      <img src={image} alt='' />
    </section>
  );
}
