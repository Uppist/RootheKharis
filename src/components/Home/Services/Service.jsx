/** @format */

import React from "react";
import styles from "./Service.module.css";
import service1 from "../../../assets/Home/Service/Service1.png";
import service2 from "../../../assets/Home/Service/Service3.png";
import service3 from "../../../assets/Home/Service/Service2.png";
import service4 from "../../../assets/Home/Service/Service4.png";
import service5 from "../../../assets/Home/Service/Service5.png";
import service6 from "../../../assets/Home/Service/Service6.png";
import service7 from "../../../assets/Home/Service/Service7.png";
import service from "./Service.json";
import { Link } from "react-router-dom";

export default function Service() {
  const imageMap = {
    "service1.png": service1,
    "service2.png": service2,
    "service3.png": service3,
    "service4.png": service4,
    "service5.png": service5,
    "service6.png": service6,
    "service7.png": service7,
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
                    {/* <Link to='/services'> */}
                    <Link
                      to='/services'
                      state={{
                        serviceid:
                          service.title.split(" ")[0] || "Other Services",
                      }}
                    >
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
