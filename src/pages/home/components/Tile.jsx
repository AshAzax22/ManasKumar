import React from "react";
import { useEffect, useState } from "react";
import styles from "../css/tile.module.css";
import arrow from "../../../assets/images/arrow.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Tile = ({ title, content, page, className, anim }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const handleClick = () => {
    if (page) {
      window.location.href = page;
    }
  };

  return (
    <>
      <div
        className={`${styles.tileContainer} ${className}`}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        data-aos={anim}
        data-aos-duration="2000"
      >
        <h1 className={styles.title}>{title}</h1>
        <p
          className={styles.content}
          style={{
            opacity: visible ? 1 : 0,
          }}
        >
          {content}
        </p>
        {page ? (
          <a
            href={page}
            className={styles.link}
            style={{ backgroundColor: visible ? "rgba(0,0,0,0.3)" : null }}
          >
            <button>
              <img
                src={arrow}
                alt="arrow"
                className={styles.arrow}
                style={{
                  transform: visible ? "rotatez(-30deg)" : null,
                }}
              />
            </button>
          </a>
        ) : null}
      </div>
    </>
  );
};

export default Tile;
