import { SELECT_PATTERN, CHANGE_TEXT } from '../actions/actionTypes';
import axios from 'axios';

const initialState = {
    patternList: []
}

export default function reduxApp(state = initialState, action) {
 //console.log(...state.patternList);
    switch(action.type) {
      case SELECT_PATTERN:
            return Object.assign({}, state, {
              patternList: [
                  ...state.patternList,
                  {
                      name: action.name
                  }
              ]
            });
      case CHANGE_TEXT:
          callAPI(state.patternList[0], action.val);
            return state;
        default:
            return state;
    }
    return state;
}

function callAPI(patternObj, text) {
    if (typeof patternObj != 'undefined') {
      let pattern = patternObj.name;
      console.log(pattern);
      console.log(text);

      if (text != '' && pattern != '') {
        console.log("Hitting server...");
        let th = this;
        axios.post('/api/v1/process/', {
          pattern: pattern,
          textContent: text
        })
        .then(function(data) {
            console.log("SUCCESS!: " + JSON.stringify(data));
        })
        .catch(function(err) {
          console.log("ERROR: " + err);
        });
        //e.preventDefault?
      }
  }
}
