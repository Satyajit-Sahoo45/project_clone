
import Link from "next/link";
import Styles from "./course.module.scss";

export default function Page() {
  return (
    <div className={Styles.course_container}>
      <h3>Courses</h3>
      <div className={Styles.card_container}>
        {[1, 2, 3, 4, 5].map((val, index) => {
          return (
            <Link href={`/course/64a402422534f901c7bcfe8d`} key={index}>
              <div className={Styles.Course_card}>
                <div className={Styles.course_thumbnail}>Mathematics 10A</div>

                <div className={Styles.card_info}>
                  <div className={Styles.card_item}>
                    Your Score : <span>N/A</span>
                  </div>
                  <div className={Styles.card_item}>
                    Class avg : <span>N/A</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
