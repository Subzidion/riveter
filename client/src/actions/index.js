import * as types from './ActionTypes'
import axios from 'axios'

export function addPattern(name, pattern) {
  return {
    type: types.ADD_PATTERN,
    name: name,
    pattern: pattern
  }
}

export function selectPattern(pattern) {
  return {
    type: types.SELECT_PATTERN,
    name: pattern
  }
}

export function deselectPattern(pattern) {
  return {
    type: types.DESELECT_PATTERN,
    name: pattern
  }
}

export function changeText(text) {
  return function(dispatch) {
    dispatch(requestData(text))
  }
}

export function requestData() {
  return {
    type: types.REQUEST_DATA
  }
}

export function receiveData(json) {
  return {
    type: types.RECEIVE_DATA,
    data: json
  }
}

export function receiveError(json) {
  return {
    type: types.RECEIVE_ERROR,
    data: json
  }
}

export function evaluateText(pattern, text) {
  return function(dispatch) {
    dispatch(requestData())
    return axios.post('http://api.riveter.site/v1/process/', {
      pattern: pattern,
      textContent: text
    })
    .then(function(data) {
      dispatch(receiveData(data))
    })
    .catch(function(err) {
      dispatch(receiveError(err))
    })
  }
}
