/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import image from "../../assets/Blog/image2.jpg";
import landlord from "../../assets/Blog/lanlordover.jpg";
import estate from "../../assets/Blog/estate.jpg";
import deed from "../../assets/Blog/deed.jpg";
import fixed from "../../assets/Blog/fixed.jpg";
import joint1 from "../../assets/Blog/joint2.jpg";
import board1 from "../../assets/Blog/board1.jpg";
import tax1 from "../../assets/Blog/tax1.jpg";

import { Link, useNavigate } from "react-router-dom";
import blog from "./Blog.json";

export default function Blog() {
  const ImageMap = {
    "image1.jpg": image,
    "landlord.jpg": landlord,
    "estate.jpg": estate,
    "fixed.jpg": fixed,
    "deed.jpg": deed,
    "joint1.jpg": joint1,
    "board1.jpg": board1,
    "tax1.jpg": tax1,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  function goToDetails(data) {
    navigate("/blog-details", { state: { data, link: blog } });
  }
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
                {/* <Link to='/blog-details' state={{ data }}> */}
                <svg
                  onClick={() => goToDetails(data)}
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
                {/* </Link> */}
              </div>

              <span>{data.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
