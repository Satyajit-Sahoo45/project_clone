"use client"

import Styles from "./page.module.scss";
import React, { useEffect, useRef } from "react";

export default function Home() {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    if (parentRef.current && childRef.current) {
      console.log(parentRef.current.clientWidth);
      console.log(childRef.current.scrollWidth);
    }
  }, []);

  return (
    <div className={Styles.box_container} ref={parentRef}>
      <h4>Mathematics - 10A</h4>
      <div className={Styles.corousel} ref={childRef}>
        {[1, 2, 3, 4, 5].map((val, index) => {
          return (
            <div className={Styles.box} key={index}>
              <div className={Styles.box_heading}>
                <span className={Styles.box_tag}>Study Session</span>

                <p className={Styles.heading}>Study Session</p>
              </div>

              <div className={Styles.box_info}>
                <p>Mathematics</p>
                <h3>Operational On Real Number</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
