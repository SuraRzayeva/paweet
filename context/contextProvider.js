import { useState, useReducer } from 'react'
import AppContext from './appContext'
import ACTIONS from './actions'
import axios from 'axios'

const ContextProvider = ({ children }) => {
  const BASE_URL = 'https://test1-api.rescuegroups.org/v5'
  const API_KEY = 'dkEV2spQ'
  const test = 'https://test1-api.rescuegroups.org/v5/public/animals/search/available'

  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.FORMON:
        return { formActive: true }
      case ACTIONS.FORMOFF:
        return { formActive: false }
      case ACTIONS.SEARCHPET:
        fetchSearchedPet()
      default:
        return state
    }
  }

  const fetchSearchedPet = async () => {
    try {
      const response = await axios.get(test, {
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/vnd.api+json',
        },
      })
      const result = await response
      console.log(result.data.data)
      console.log(result.data.data[0].relationships.pictures.data[1])
    } catch (e) {
      console.log(e)
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
