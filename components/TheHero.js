import styles from '../styles/Hero.module.scss'
import { useContext } from 'react'
import appContex from '../context/appContext'
import ACTIONS from '../context/actions'

const TheHero = () => {
  const { state, dispatch } = useContext(appContex)

  const activateForm = () => {
    state.formActive === true ? dispatch({ type: ACTIONS.FORMOFF }) : dispatch({ type: ACTIONS.FORMON })
  }

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
        <button onClick={activateForm}>Save a soul</button>
      </div>
    </div>
  )
}

export default TheHero
