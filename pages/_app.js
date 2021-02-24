import '../styles/globals.scss'
import ContextProvider from '../context/contextProvider'
import Layout from '../components/Layout'
import Navigation from '../components/Navigation'

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Navigation />
      <Component {...pageProps} />
      <Layout />
    </ContextProvider>
  )
}

export default MyApp
