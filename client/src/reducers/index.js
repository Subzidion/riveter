import * as types from '../actions/ActionTypes'

export const initialState = {
  patternList: [
    'basic.matchall',
    'basic.element',
    'basic.element_bracketed',
    'basic.element_quoted',
    'basic.datetime_patterns',
    'basic.network_patterns',
    'basic.punctuation',
    'basic.unmatched'
  ],
  currentPattern: 'basic.matchall',
  currentText: '',
  jsonOutput: 'test'
}

export default function RiveterReducer(state = initialState, action) {
  switch(action.type) {
    case types.ADD_PATTERN:
      if(action.pattern !== '') {
        return Object.assign({}, state, {
          patternList: [
            ...state.patternList,
            action.pattern
          ]
        })
      }
      return state

    case types.SELECT_PATTERN:
      return Object.assign({}, state, {
        currentPattern: action.name
      })

    case types.DESELECT_PATTERN:
      return Object.assign({}, state, {
        currentPattern: undefined
      })

    case types.REQUEST_DATA:
      return state

    case types.RECEIVE_DATA:
      return Object.assign({}, state, {
        jsonOutput: JSON.stringify(action.data.data)
      })

    case types.RECEIVE_ERROR:
      return state

    default:
      return state
  }
}
