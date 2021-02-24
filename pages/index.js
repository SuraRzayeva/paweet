import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Hero from '../components/TheHero'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.hero}>
        <Hero />
      </div>
      <div className={styles.img}>
        <h1>what</h1>
      </div>
    </div>
  )
}
