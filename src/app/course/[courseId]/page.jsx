"use client";
import React, { useState } from "react";
import Styles from "./courseid.module.scss";

export default function Page() {
  //   const [reviews, setReviews] = useState([
  //     {
  //       type: "lecture",
  //       title: "Lecture 1",
  //       sub_title: "Introduction to the course",
  //       date: "12/12/2020",
  //       pages: 10,
  //       image: schoolImage,
  //     },
  //     {
  //       type: "test",
  //       title: "Class Test 1",
  //       sub_title: "The making of global world",
  //       date: "1/5/2023",
  //       pages: 19,
  //       image: schoolImage,
  //     },
  //     {
  //       type: "study session",
  //       title: "Study Session 1",
  //       sub_title: "The making of global world",
  //       date: "18/6/2022",
  //       pages: 15,
  //       image: schoolImage,
  //     },
  //     {
  //       type: "lecture",
  //       title: "Lecture 1",
  //       sub_title: "Introduction to the course",
  //       date: "12/12/2020",
  //       pages: 10,
  //     },
  //     {
  //       type: "test",
  //       title: "Class Test 1",
  //       sub_title: "The making of global world",
  //       date: "1/5/2023",
  //       pages: 19,
  //     },
  //     {
  //       type: "study session",
  //       title: "Study Session 1",
  //       sub_title: "The making of global world",
  //       date: "18/6/2022",
  //       pages: 15,
  //     },
  //   ]);

  return (
    <div className={Styles.course}>
      <div className={Styles.bread_crumb}>Courses {">"} Mathematics 10A</div>

      <div className={Styles.header}>
        <div>Mathematics 10A</div>
      </div>

      <div className={Styles.card_container}>
        <div className={Styles.review_container}>
          <div className={Styles.review_card}>
            <div className={Styles.review}>
              <div className={Styles.img}>
                Study <span>Session</span>
              </div>

              <div className={Styles.review_content}>
                <div className={Styles.review_title}> Operation on Real Number</div>
                <div className={Styles.review_time}>11/1/23</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
