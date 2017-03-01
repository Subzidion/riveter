import { ADD_PATTERN, SELECT_PATTERN, DESELECT_PATTERN, CHANGE_TEXT } from './ActionTypes'

export function addPattern(name, pattern) {
  return {
    type: ADD_PATTERN,
    name: name,
    pattern: pattern
  }
}

export function selectPattern(pattern) {
  return {
    type: SELECT_PATTERN,
    name: pattern
  }
}

export function deselectPattern(pattern) {
  return {
    type: DESELECT_PATTERN,
    name: pattern
  }
}

export function changeText(text) {
  console.log('New Text: ' + text)
  return {
    type: CHANGE_TEXT,
    val: text
  }
}
