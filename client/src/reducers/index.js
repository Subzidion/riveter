import { ADD_PATTERN, SELECT_PATTERN, CHANGE_TEXT } from '../actions/ActionTypes'
import axios from 'axios'

const initialState = {
  patternList: [],
  currPattern: {name: ''},
  jsonOutput: ''
}

export default function RiveterStore(state = initialState, action) {
  switch(action.type) {
    case ADD_PATTERN:
      return Object.assign({}, state, {
        patternList: [
          ...state.patternList,
          {
            name: action.name,
            pattern: action.pattern
          }
        ]
      })

    case SELECT_PATTERN:
      state.currPattern.name = action.name
      return state

    case CHANGE_TEXT:
      let result = state.patternList.filter(function(obj) {
        return obj.name === state.currPattern.name
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
