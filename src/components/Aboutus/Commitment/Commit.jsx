/** @format */

import React from "react";
import styles from "./Commit.module.css";
import image from "../../../assets/About/Commitment/commitment.png";

export default function Commit() {
  return (
    <section className={styles.commit}>
      <img src={image} alt='' />

      <div>
        <h3>Our Commitment</h3>

        <div className={styles.mark}>
          <div>
            <svg
              width='18'
              height='17'
              viewBox='0 0 18 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_141_150)'>
                <path
                  d='M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z'
                  fill='#233E81'
                />
              </g>
              <defs>
                <clipPath id='clip0_141_150'>
                  <rect
                    width='17'
                    height='17'
                    fill='white'
                    transform='translate(0.4375)'
                  />
                </clipPath>
              </defs>
            </svg>

            <span>
              <label> Excellence in Every Detail</label>
              We bring precision, diligence, and expertise to every matter,
              ensuring that our clients receive unmatched service.
            </span>
          </div>

          <div>
            <svg
              width='18'
              height='17'
              viewBox='0 0 18 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_141_150)'>
                <path
                  d='M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z'
                  fill='#233E81'
                />
              </g>
              <defs>
                <clipPath id='clip0_141_150'>
                  <rect
                    width='17'
                    height='17'
                    fill='white'
                    transform='translate(0.4375)'
                  />
                </clipPath>
              </defs>
            </svg>
            <span>
              <label> Partnership Beyond Transactions</label>
              Our relationships are built on trust, collaboration, and a deep
              understanding of our clients’ industries, goals, and challenges.
            </span>
          </div>

          <div>
            <svg
              width='18'
              height='17'
              viewBox='0 0 18 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_141_150)'>
                <path
                  d='M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z'
                  fill='#233E81'
                />
              </g>
              <defs>
                <clipPath id='clip0_141_150'>
                  <rect
                    width='17'
                    height='17'
                    fill='white'
                    transform='translate(0.4375)'
                  />
                </clipPath>
              </defs>
            </svg>
            <span>
              <label> Sustainability and Growth</label>
              We champion strategies that balance profitability with long-term
              sustainability, aligning our services with our clients’ ambitions
              for growth and impact
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
