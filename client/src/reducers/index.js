import { ADD_PATTERN, SELECT_PATTERN, DESELECT_PATTERN, CHANGE_TEXT } from '../actions/ActionTypes'
import axios from 'axios'

const initialState = {
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
  jsonOutput: ''
}

export default function RiveterStore(state = initialState, action) {
  switch(action.type) {
    case ADD_PATTERN:
      if(action.pattern !== '') {
        return Object.assign({}, state, {
          patternList: [
            ...state.patternList,
            action.pattern 
          ]
        })
      }
      return state

    case SELECT_PATTERN:
      return Object.assign({}, state, {
        currentPattern: action.name
      })

    case DESELECT_PATTERN:
      return Object.assign({}, state, {
        currentPattern: undefined
      })

    case CHANGE_TEXT:
      let result = state.patternList.filter(function(obj) {
        return obj.name === state.currentPattern.name
      })
      callAPI(result[0], action.val)
      return state

    default:
      return state
  }
}

function callAPI(patternObj, text) {
  if(typeof patternObj !== 'undefined') {
    let pattern = patternObj.pattern
    console.log(pattern)
    console.log(text)

    if(text !== '' && pattern !== '') {
      console.log('Hitting server...')
      axios.post('/api/v1/process/', {
        pattern: pattern,
        textContent: text
      })
      .then(function(data) {
        console.log('SUCCESS!: ' + JSON.stringify(data))
      })
      .catch(function(err) {
        console.log('ERROR: ' + err)
      })
    }
  }
}
