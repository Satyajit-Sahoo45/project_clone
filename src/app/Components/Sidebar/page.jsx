import styles from "./sidebar.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icons/logo.svg";
import homeOutline from "@/assets/icons/homeOutlined.svg";
import layersoutlined from "@/assets/icons/layersOutlined.svg";
import bulbOnOutlined from "@/assets/icons/bulbOnOutlined.svg";
import cogOutlined from "@/assets/icons/cogOutlined.svg";
import messageWhite from "@/assets/icons/messageWhite.svg";
import userOutlined from "@/assets/icons/userOutlined.svg";
import hamIcon from "@/assets/icons/ham.svg";

export default function Page() {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebar_nav}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" />
          <span className={styles.hero}>Vedika</span>
        </div>

        <div className={styles.top_nav_links}>
          <ul>
            <Link href="/">
              <li>
                <Image src={homeOutline} alt="home icon" />
                <span>Home</span>
              </li>
            </Link>
            <Link href="/course">
              <li>
                <Image src={layersoutlined} alt="home icon" />
                <span>Course</span>
              </li>
            </Link>
            <Link href="/learn">
              <li>
                <Image src={bulbOnOutlined} alt="home icon" />
                <span>Learn</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className={styles.bottom_nav_links}>
          <ul>
            <Link href="/profile">
              <li>
                <Image src={userOutlined} alt="home icon" />
                <span>Profile</span>
              </li>
            </Link>
            <Link href="/feedback">
              <li>
                <Image src={messageWhite} alt="home icon" />
                <span>Feedback</span>
              </li>
            </Link>
            <Link href="/setting">
              <li>
                <Image src={cogOutlined} alt="home icon" />
                <span>Setting</span>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
