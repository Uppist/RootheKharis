/** @format */
import React from "react";
import styles from "../style.module.css";
import image2 from "../../../assets/Blog/image3.jpg";

import blog from "../Blog.json";
import { Link } from "react-router-dom";
export default function Details() {
  const ImageMap = {
    "image2.jpg": image2,
  };
  return (
    <section className={styles.detail}>
      <div className={styles.texts}>
        {blog.map((data, index) => (
          <div>
            <label htmlFor=''>Latest Article</label>
            <h2>{data.title}</h2>
            <img src={ImageMap[data.image2]} alt='' />
            <div>
              <div className={styles.admin}>
                {/* <span>Admin</span> */}
                <span>19 March 2025</span>
              </div>
              <div className={styles.intro}>
                <span>{data.sections[0]?.content1}</span>
                <span>{data.sections[0]?.content2}</span>
                <span>{data.sections[0]?.content3}</span>
                <span>
                  <b>{data.sections[1]?.heading}</b>
                </span>
                <span>{data.sections[1]?.content}</span>
                <span>{data.sections[1]?.content2}</span>
                <span>
                  <b>{data.sections[2]?.heading}</b>
                </span>
                <ol>
                  <li>
                    <b>{data.sections[2]?.points?.[0]?.title} </b>
                    {data.sections[2]?.points?.[0]?.description}
                  </li>{" "}
                  <li>
                    <b> {data.sections[2]?.points?.[1]?.title} </b>
                    {data.sections[2]?.points?.[1]?.description}
                  </li>{" "}
                  <li>
                    <b>{data.sections[2]?.points?.[2]?.title} </b>
                    {data.sections[2]?.points?.[2]?.description}
                  </li>{" "}
                  <li>
                    <b>{data.sections[2]?.points?.[3]?.title} </b>
                    {data.sections[2]?.points?.[3]?.description}
                  </li>{" "}
                </ol>
                <b>
                  {" "}
                  <span>{data.sections[3]?.heading}</span>
                </b>
                <span>{data.sections[3]?.content}</span>
                <span>{data.sections[3]?.content2}</span>
                <span className={styles.help}>
                  Do you need help?{" "}
                  <Link to='https://calendly.com/roothekharispartners/30min'>
                    <p>Book a consultation.</p>
                  </Link>
                </span>
              </div>

              {/* <div>
                {data.sections.map((section, index) => (
                  <span>{section.heading[0]}</span>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
