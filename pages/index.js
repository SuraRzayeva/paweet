import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Hero from '../components/TheHero'
import { useContext } from 'react'
import appContext from '../context/appContext'
import ACTIONS from '../context/actions'
import TheForm from '../components/TheForm'

export default function Home() {
  const { state, dispatch } = useContext(appContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>{!state.formActive ? <Hero /> : <TheForm />}</div>
      <div className={styles.img}></div>
      <div className={styles.backgroundTexts}>
        <h1 className={styles.line1}>ADOPT.</h1>
        <h1 className={styles.line2}>ADOPT.</h1>
      </div>
    </div>
  )
}
