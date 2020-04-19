import { IoIosArrowRoundBack } from 'react-icons/io';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <a href="https://mapyouradventure.com" className={styles.backText}><IoIosArrowRoundBack /> <span>Back</span></a>
      <a href="https://mapyouradventure.com" className={styles.logo}>
        <h1 className={styles.logoText}>Map Your Adventure</h1>
      </a>
      <div className={styles.right}></div>
    </header>
  )
}

export default Header;
