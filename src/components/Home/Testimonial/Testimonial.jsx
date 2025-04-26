/** @format */

import styles from "./Testimonial.module.css";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        '"I really do appreciate your good work and I am confident to stand as a referral to more clients in the future."',
    },
    {
      quote: '"I like your work."',
    },
    {
      quote:
        '"This is great. Many thanks to you and Ehis for your work on this case."',
    },
  ];

  return (
    <div className={styles.testimonialSection}>
      <h2 className={styles.heading}>Testimonials</h2>
      <div className={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            {/* <div> */}
            <div className={styles.cardContent}>
              <p id='quote-text' className={styles.quoteText}>
                {testimonial.quote}
              </p>
            </div>
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
