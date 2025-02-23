/** @format */

import React from "react";
import styles from "./Service.module.css";
import image1 from "../../../assets/Home/Service/Service1.png";
import image2 from "../../../assets/Home/Service/Service2.png";
import image3 from "../../../assets/Home/Service/Service3.png";
import image4 from "../../../assets/Home/Service/Service4.png";
import image5 from "../../../assets/Home/Service/Service5.png";
import image6 from "../../../assets/Home/Service/Service6.png";
import image7 from "../../../assets/Home/Service/Service7.png";
import service from "./Service.json";
import { Link } from "react-router-dom";

export default function Service() {
  const imageMap = {
    "image1.png": image1,
    "image2.png": image2,
    "image3.png": image3,
    "image4.png": image4,
    "image5.png": image5,
    "image6.png": image6,
    "image7.png": image7,
  };
  return (
    <div className={styles.background1}>
      <div className={styles.background2}>
        <div className={styles.background3}>
          <section className={styles.service}>
            <div className={styles.texts}>
              <label htmlFor=''>Who are we servicing?</label>
              <h2>Services We Provide</h2>
              <p>
                Roothe-Kharis & Partners specializes exclusively in
                transactional, advisory, and non-litigation services.
              </p>
            </div>
            <div className={styles.services}>
              {service.map((service, index) => (
                <div key={index} className={styles.one}>
                  <img src={imageMap[service.image]} alt={service.title} />
                  <div>
                    <h2>{service.title}</h2>
                    <span>{service.description}</span>
                    <Link to='/services'>
                      <button className={styles.button} type='button'>
                        Read full details
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
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
