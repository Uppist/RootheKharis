/** @format */

import React from "react";
import styles from "./Service.module.css";
import service from "./Service.json";
import service1 from "../../assets/Service/service1.png";
import service2 from "../../assets/Service/service2.png";
import service3 from "../../assets/Service/service3.png";
import service4 from "../../assets/Service/service4.png";
import service5 from "../../assets/Service/service5.png";
import service6 from "../../assets/Service/service6.png";
import service7 from "../../assets/Service/service7.png";
import Mark from "./Mark";

export default function Service() {
  const services = [
    "Immigration",
    "Tax advisory",
    "Technology & digital economy",
    "Finance & capital markets",
  ];
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
    <div className={styles.bg1}>
      <div className={styles.bg2}>
        <section className={styles.service}>
          <div className={styles.texts}>
            <label htmlFor=''>Who are we servicing?</label>
            <h2>Services We Provide</h2>
            <p>
              Roothe-Kharis & Partners specializes exclusively in transactional,
              advisory, and non-litigation services.
            </p>
          </div>
          {service.map((data, index) => (
            <div className={styles.details}>
              <div className={styles.detail} key={index}>
                <h2>{data.title}</h2>
                <span>{data.subtitle}</span>
                <p>{data.p1}</p>
                <p>{data.p2}</p>

                <div className={styles.lists}>
                  {[
                    data.li1,
                    data.li2,
                    data.li3,
                    data.li4,
                    data.li5,
                    data.li6,
                    data.li7,
                    data.li8,
                  ]
                    .filter((li) => li)
                    .map((li, idx) => (
                      <div className={styles.mark} key={idx}>
                        <Mark />
                        <span>{li}</span>
                      </div>
                    ))}
                </div>
              </div>
              <img src={imageMap[data.image]} alt='' />
            </div>
          ))}

          <div className={styles.h2}>
            <h2>Other Services</h2>

            <div className={styles.container}>
              {services.map((service, index) => (
                <div key={index} className={styles.item}>
                  <Mark />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
