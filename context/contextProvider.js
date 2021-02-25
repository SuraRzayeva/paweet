import { useState, useReducer } from 'react'
import AppContext from './appContext'
import ACTIONS from './actions'

const ContextProvider = ({ children }) => {
  const BASE_URL = 'https://test1-api.rescuegroups.org/v5'
  const API_KEY = 'dkEV2spQ'

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FORMON:
        return { formActive: true }
      case ACTIONS.FORMOFF:
        return { formActive: false }
      default:
        return state
    }
  }

  const initialState = {
    formActive: false,
    availableDogs: [],
    availableCats: [],
    availableAnimals: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export default ContextProvider
