import styles from "../../styles/Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faDribbbleSquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footerWrap}>
      <footer className={styles.footer}>
        <ul className={styles.snsBtn}>
          <li>
            <a href="/">
              <FontAwesomeIcon
                icon={faTwitterSquare}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                icon={faGithubSquare}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon
                icon={faDribbbleSquare}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}