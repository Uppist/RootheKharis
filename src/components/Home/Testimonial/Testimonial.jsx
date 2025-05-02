/** @format */

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Testimonial.module.css";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        '"I really do appreciate your good work and I am confident to stand as a referral to more clients in the future."',
      attribution: "Mr. Jude Joseph MD and CEO \n Soil Foods Services Ltd.",
    },
    {
      quote: '\n"I like your work."',
      attribution: "MD, Royal Albert Properties Limited",
    },
    {
      quote:
        '"This is great. Many thanks to you and Ehis for your work on this case."',
      attribution: "Dr. Kene Onwugaje MD, REDUS CENTER FOR DIGESTIVE HEALTH LTD",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.heading}>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.cardContent}>
              <p id="quote-text" className={styles.quoteText}>
                {testimonial.quote}
              </p>
              <div className={styles.attribution}>
                <span>{testimonial.attribution}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;