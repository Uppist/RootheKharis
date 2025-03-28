/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image from "../../assets/Blog/image2.jpg";
import landlord from "../../assets/Blog/lanlordover.jpg";
import estate from "../../assets/Blog/estate.jpg";
import deed from "../../assets/Blog/deed.jpg";

import { Link } from "react-router-dom";
import blog from "./Blog.json";

export default function Blog() {
  const ImageMap = {
    "image1.jpg": image,
    "landlord.jpg": landlord,
    "estate.jpg": estate,

    "deed.jpg": deed,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.blog}>
      <div className={styles.texts}>
        <label htmlFor=''>Latest Article</label>
        <h2>Blog Posts</h2>
      </div>
      <div className={styles.container}>
        {blog.map((data, index) => (
          <div className={styles.container1} key={index}>
            <img src={ImageMap[data.image]} alt='' />
            <div>
              <label htmlFor=''>{data.date}</label>
              <div className={styles.h3}>
                <h3>{data.title}</h3>
                <Link to='/blog-details' state={{ data }}>
                  <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 11L11 1M11 1H1M11 1V11'
                      stroke='#B8824F'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </Link>
              </div>

              <span>{data.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
