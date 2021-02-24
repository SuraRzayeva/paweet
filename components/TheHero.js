import styles from '../styles/Hero.module.scss'

const TheHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainLine}>
        <h1>Adopt.</h1>
        <h3>Don't Shop.</h3>
      </div>
      <div className={styles.line}></div>
      <div className={styles.secondLine}>
        <p>Time to find the love of your life.</p>
      </div>
      <div className={styles.cta}>
        <button>Save a soul</button>
      </div>
    </div>
  )
}

export default TheHero
