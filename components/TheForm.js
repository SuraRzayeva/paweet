import styles from '../styles/Form.module.scss'
import { useContext } from 'react'
import Actions from '../context/actions'
import appContext from '../context/appContext'

const TheForm = () => {
  const { state, dispatch } = useContext(appContext)

  const searchPet = () => {
    dispatch({ type: Actions.SEARCHPET })
  }

  return (
    <div className={styles.container}>
      <input type="text" className={styles.animal} />
      <input type="text" className={styles.location} />
      <button onClick={searchPet}> search </button>
    </div>
  )
}

export default TheForm
