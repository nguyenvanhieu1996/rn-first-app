import {ADD_NOTE} from './types'

const initialState = []

function overViewReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          note: action.note
        }
      ]

    default:
      return state
  }
}

export default overViewReducer