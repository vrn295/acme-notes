import Image from "next/image";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.subscribe}>
          <h4>Stay connected with us.</h4>
          <form action="">
            <fieldset>
              <input
                className={styles.subscribe_input}
                type="email"
                placeholder="Enter your email"
              />
              <button>Enter</button>
            </fieldset>
          </form>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.compnay}>
            <h2>Acme Note</h2>
            <p>Effortless note-taking, wherever you are.</p>
          </div>
          <ul className={styles.social_links}>
            <li>
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </li>
            <li>
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </li>
            <li>
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </li>
            <li>
              <Image
                src="/icons/pinterest.svg"
                alt="Pinterest"
                width={20}
                height={20}
              />
            </li>
          </ul>
        </div>
        <div className={styles.certificate}>
          <p>© 2021 Acme Note. All rights reserved.</p>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
