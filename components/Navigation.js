import styles from '../styles/Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>dogs</li>
        <li>cats</li>
        <li>all</li>
        <li>Procedure</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navigation
