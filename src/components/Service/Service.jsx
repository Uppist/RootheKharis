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
import service8 from "../../assets/Service/service8.png";
import Mark from "./Mark";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Service() {
  const location = useLocation();
  const serviceRefs = useRef({});
  const otherServicesRef = useRef({});

  // Store refs for each service
  service.forEach((data) => {
    serviceRefs.current[data.title] = useRef(null);
  });

  useEffect(() => {
    if (location.state?.serviceid) {
      const targetElement = serviceRefs.current[location.state.serviceid];

      if (targetElement) {
        const isMobile = window.innerWidth <= 768;
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: isMobile ? "start" : "center",
        });
      } else if (otherServicesRef.current) {
        otherServicesRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [location.state]);

  const services = ["Immigration", "Finance & capital markets", "Tax advisory"];
  const imageMap = {
    "service1.png": service1,
    "service2.png": service2,
    "service3.png": service3,
    "service4.png": service4,
    "service5.png": service5,
    "service6.png": service6,
    "service7.png": service7,
    "service8.png": service8,
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
            <div
              className={styles.details}
              ref={(el) => (serviceRefs.current[data.title.split(" ")[0]] = el)}
              key={data.title}
            >
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

            <div className={styles.container} ref={otherServicesRef}>
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
