import styles from './Loader.module.scss';

const Loader = () => {
  const circles = [...Array(4)].map((_, index) => <div key={index} className={styles.circle}/>);

  return (
    <div className={styles.circleContainer}>
      {circles}
    </div>
  )
}

export default Loader;
