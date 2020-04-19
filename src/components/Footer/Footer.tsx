// import { FaBeer } from 'react-icons/fa';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <a href="https://mapyouradventure.com">
        Map Your Adventure
      </a>
      <div className={styles.secondary}>
        <a href="https://www.mapyouradventure.com/contact">
          Contact
        </a>
        <a href="https://www.mapyouradventure.com/faq">
          FAQ
        </a>
        <a href="https://www.mapyouradventure.com/policies">
          Policies
        </a>
        <span
          className={styles.do}
        >
          <a
            href="https://devinowen.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            do
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer;
