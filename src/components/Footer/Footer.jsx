/** @format */

import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

import Uppist from "./Uppist";
import Designed from "./Designed";
import Footerlogo from "./Footerlogo";
import Svg from "./Svg";
// import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className={styles.bg}>
      <div className={styles.footer}>
        <div className={styles.footer2}>
          <div className={styles.footerlogo}>
            <Link to='/'>
              <Footerlogo />
            </Link>
          </div>
          <div className={styles.details}>
            <div>
              <h2>
                We stand by your side, providing expert legal guidance and
                unwavering support to protect your rights and ensure justice is
                served
              </h2>
              <Svg />

              <h3>Open hour</h3>
              <span>Monday - Friday : 9:00 AM - 6:00 PM</span>
            </div>

            <div className={styles.connect}>
              <label>Contact us</label>

              <div>
                <svg
                  width='18'
                  height='17'
                  viewBox='0 0 18 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.5569 10.906L12.1019 11.359C12.1019 11.359 11.0189 12.435 8.06386 9.49698C5.10886 6.55898 6.19186 5.48298 6.19186 5.48298L6.47786 5.19698C7.18486 4.49498 7.25186 3.36698 6.63486 2.54298L5.37486 0.859979C4.61086 -0.160021 3.13586 -0.29502 2.26086 0.57498L0.690856 2.13498C0.257856 2.56698 -0.032144 3.12498 0.002856 3.74498C0.092856 5.33198 0.810856 8.74498 4.81486 12.727C9.06186 16.949 13.0469 17.117 14.6759 16.965C15.1919 16.917 15.6399 16.655 16.0009 16.295L17.4209 14.883C18.3809 13.93 18.1109 12.295 16.8829 11.628L14.9729 10.589C14.1669 10.152 13.1869 10.28 12.5569 10.906Z'
                    fill='white'
                  />
                </svg>

                <span>+2349076490029</span>
              </div>
              <div>
                <svg
                  width='19'
                  height='15'
                  viewBox='0 0 19 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19 0.9375V4.6875L9.5 8.4375L0 4.6875V0.9375C0 0.68886 0.100089 0.450403 0.278249 0.274588C0.456408 0.0987722 0.698044 0 0.95 0H18.05C18.302 0 18.5436 0.0987722 18.7218 0.274588C18.8999 0.450403 19 0.68886 19 0.9375ZM0 6.70688V14.0625C0 14.3111 0.100089 14.5496 0.278249 14.7254C0.456408 14.9012 0.698044 15 0.95 15H18.05C18.302 15 18.5436 14.9012 18.7218 14.7254C18.8999 14.5496 19 14.3111 19 14.0625V6.70688L9.5 10.4569L0 6.70688Z'
                    fill='white'
                  />
                </svg>

                <span>info@roothekharis.com</span>
              </div>
              <div className={styles.location}>
                <svg
                  width='16'
                  height='20'
                  viewBox='0 0 16 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M8.00008 0C3.58908 0 8.14446e-05 3.589 8.14446e-05 7.995C-0.0289186 14.44 7.69608 19.784 8.00008 20C8.00008 20 16.0291 14.44 16.0001 8C16.0001 3.589 12.4111 0 8.00008 0ZM8.00008 12C5.79008 12 4.00008 10.21 4.00008 8C4.00008 5.79 5.79008 4 8.00008 4C10.2101 4 12.0001 5.79 12.0001 8C12.0001 10.21 10.2101 12 8.00008 12Z'
                    fill='white'
                  />
                </svg>

                <span>
                  Wing B, 4th floor, Plot 6E, Abdulrahman Okene Street, Off
                  Ligali Ayorinde, Victoria island, Lagos state.
                </span>
              </div>
            </div>

            <div className={styles.quicks}>
              <label>Quick Links</label>

              <ul>
                <Link to='/'>
                  <li>Home</li>
                </Link>
                <Link to='/aboutus'>
                  {" "}
                  <li>About us</li>
                </Link>
                <Link to='/services'>
                  <li>Our Services</li>
                </Link>
                <li>Blog</li>
                <Link to='/contactus'>
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        <label>© Roothe Kharis 2025. All rights reserved</label>

        <span>
          <Designed />
          <Link to='https://www.uppist.xyz/'>
            {" "}
            <Uppist />
          </Link>
        </span>
      </div>
    </footer>
  );
}
