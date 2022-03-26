import styles from "../../styles/Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function Heater() {
  return (
    <div className={styles.headerWrap}>
      <header className={styles.header}>
        <div className={styles.logoWrap}>
          <img src="/image/logo.svg" alt="logo" />
        </div>
        <nav className={styles.navWrap}>
          <ul className={styles.lists}>
            <li><a href="/">HOME</a></li>
            <li><a href="/">BLOG</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">CONTACT</a></li>
          </ul>
          <ul className="navBtn">
            <li>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 24, color: "#4A4A4A" }}
            />
            </li>
            <li>
            <FontAwesomeIcon
              icon={faSearch}
              style={{ fontSize: 24, color: "#4A4A4A" }}
            />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}