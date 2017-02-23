import { ADD_PATTERN, SELECT_PATTERN, CHANGE_TEXT } from './actionTypes';

export function addPattern(name, pattern) {
    return {
        type: ADD_PATTERN,
        name: name,
        pattern: pattern
    }
}

export function selectPattern(text) {
    return {
        type: SELECT_PATTERN,
        name: text
    }
}

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        val: text
    }
}
