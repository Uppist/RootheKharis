/** @format */
import React, { useEffect } from "react";
import styles from "../style.module.css";
import image2 from "../../../assets/Blog/image3.jpg";
import landlord from "../../../assets/Blog/landlords.jpg";
import estate2 from "../../../assets/Blog/estate2.jpg";
import deed2 from "../../../assets/Blog/deed2.jpg";

import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Details() {
  const ImageMap = {
    "image2.jpg": image2,
    "landlord2.jpg": landlord,
    "estate2.jpg": estate2,
    "deed2.jpg": deed2,
  };

  const location = useLocation();
  const navigate = useNavigate();
  const { data, link } = location.state || {};
  console.log(location.state);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) return <p>Loading...</p>;

  // const currentIndex = link.findIndex((item) => item.link === data.link);
  // console.log(currentIndex, "currentIndex");

  function goToNext() {
    console.log("current path", location.pathname);
  }

  function previous() {}
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
          {/* {data.sections?.map((section, index) => ( */}
          {/* // <div key={index}> */}
          <div dangerouslySetInnerHTML={{ __html: data.content }} />

          {/* {section?.headings && <span><b>{section?.headings}</b></span>}
              
              {section.heading && <span><b>{section.heading}</b></span>}
              {section.content && <span>{section.content}</span>}
              {section.content2 && <span>{section.content2}</span>}
              {section.content3 && <span>{section.content3}</span>}
              {section.content4 && <span>{section.content4}</span>}
              {section.content5 && <span>{section.content5}</span>}
              {section.content6 && <span>{section.content6}</span>}
              

              
              {section.points && (
                <ol>
                  {section.points.map((point, idx) => (
                    <li key={idx}>
                      <b>{point.title}</b> {point.description}
                    </li>
                  ))}
                </ol>
              )} */}
          {/* </div> */}
          {/* ))} */}
        </div>
        <span className={styles.help}>
          <Link to='https://calendly.com/roothekharispartners/30min'>
            <p>Book a consultation.</p>
          </Link>
        </span>
        {/* <div className={styles.button}>
          <button>Previous</button>
          <button onClick={goToNext}>Next</button>
        </div>{" "} */}
      </div>
    </section>
  );
}
