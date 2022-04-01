import styles from "../../styles/Footer.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className={styles.footerWrap}>
      <footer className={styles.footer}>
        <ul className={styles.snsBtn}>
          <li>
            <a href="https://twitter.com/w3cdp6084w3cdp">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/w3cdpmori">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/w3cdp6084-dev">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/w3cdp6084">
              <FontAwesomeIcon
                icon={faDribbble}
                style={{ fontSize: 24, color: "#4A4A4A" }}
              />
            </a>
          </li>
        </ul>
        <p className="text-center mt-10 mb-20">koneru blog.</p>
      </footer>
    </div>
  );
}