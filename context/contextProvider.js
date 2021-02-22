import { useState } from 'react'
import AppContext from './appContext'

const ContextProvider = ({ children }) => {
  const [test, useTest] = useState('red')

  return <AppContext.Provider value={{ test }}>{children}</AppContext.Provider>
}

export default ContextProvider
