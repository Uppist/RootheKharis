/** @format */
import React, { useEffect } from "react";
import styles from "../style.module.css";
import image2 from "../../../assets/Blog/image3.jpg";
import landlord from "../../../assets/Blog/landlords.jpg";
import estate2 from "../../../assets/Blog/estate2.jpg";
import deed2 from "../../../assets/Blog/deed2.jpg";
import fixed2 from "../../../assets/Blog/fixed2.jpg";
import joint2 from "../../../assets/Blog/joint1.jpg";
import board2 from "../../../assets/Blog/board2.jpg";
import tax2 from "../../../assets/Blog/tax2.jpg";
import transfer2 from "../../../assets/Blog/transfer2.jpg";

// import arrrow from "../../../assets/akar-icons_arrow-right-thin.svg";
// import arr from "../../../assets/akar-icons_arrow-left-thin.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Details() {
  const ImageMap = {
    "image2.jpg": image2,
    "landlord2.jpg": landlord,
    "estate2.jpg": estate2,
    "deed2.jpg": deed2,
    "fixed2.jpg": fixed2,
    "joint2.jpg": joint2,
    "board2.jpg": board2,
    "tax2.jpg": tax2,
    "transfer2.jpg": transfer2,
  };

  const location = useLocation();
  const navigate = useNavigate();
  const { data, link } = location.state || {};
  console.log(location.state);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  if (!data) return <p>Loading...</p>;
  useEffect(() => {
    window.scrollTo(0, 0);

    // Disable right-click for the entire document
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  function goToNext() {
    if (!link) {
      console.error("The 'link' array is undefined.");
      return;
    }

    const currentIndex = link.findIndex((item) => item.link === data.link);
    if (currentIndex < link.length - 1) {
      const nextArticle = link[currentIndex + 1];
      navigate("/blog-details", { state: { data: nextArticle, link } });
    }
  }

  function goToPrevious() {
    if (!link) {
      console.error("The 'link' array is undefined.");
      return;
    }

    const currentIndex = link.findIndex((item) => item.link === data.link);
    if (currentIndex > 0) {
      const previousArticle = link[currentIndex - 1];
      navigate("/blog-details", { state: { data: previousArticle, link } });
    }
  }
  return (
    <section className={styles.detail}>
      <div className={styles.texts}>
        <label htmlFor=''>Latest Article</label>
        <h2>{data.title}</h2>
        {data.image2 && (
          <img src={ImageMap[data.image2] || data.image2} alt={data.title} />
        )}
        <div className={styles.admin}>
          <span>{data.date}</span>
        </div>
        <div className={styles.intro}>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        <span className={styles.help}>
          <Link to='https://calendly.com/roothekharispartners/30min'>
            <p>Book a consultation.</p>
          </Link>
          <span>© Roothe-Kharis & Partners</span>
        </span>
        <div className={styles.button}>
          <button onClick={goToPrevious}>Previous</button>
          <button onClick={goToNext}>Next</button>
        </div>{" "}
      </div>
    </section>
  );
}
