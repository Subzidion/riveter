import { SELECT_PATTERN, CHANGE_TEXT } from './actionTypes';

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
