import styles from "../../styles/Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { ToggleDarkMode } from '../utils/ToggleDarkMode'

export default function Heater() {
  return (
    <div className={styles.headerWrap}>
      <header className={styles.header}>
        <div className={styles.logoWrap}>
          <img src="/image/logo.svg" alt="logo" />
        </div>
        <nav className={styles.navWrap}>
          <ul className={styles.lists}>
            <li className=""><Link href="/"><a>HOME</a></Link></li>
            <li><Link href="/list"><a>BLOG</a></Link></li>
            <li><Link href="/about"><a>ABOUT</a></Link></li>
            <li><Link href="/contact"><a>CONTACT</a></Link></li>
          </ul>
          <ul className={styles.navBtn}>
            <li>
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </li>
            <li>
              <ToggleDarkMode />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}