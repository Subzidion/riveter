import * as actions from '../src/actions/index'
import * as types from '../src/actions/ActionTypes'
import RiveterReducer, {initialState} from '../src/reducers/index'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      RiveterReducer(undefined, {})
    ).toEqual(
      initialState
    )
  })

  it('should handle ADD_PATTERN with empty pattern', () => {
    expect(
      RiveterReducer(initialState, {
        type: types.ADD_PATTERN,
        pattern: ""
      })
    ).toEqual(
      initialState
    )
  })

  it('should handle ADD_PATTERN', () => {
    let addedPattern = "[:digit:]+"
    // use slice to clone array
    let addedState = initialState.patternList.slice(0)
    addedState.push("[:digit:]+")

    expect(
      RiveterReducer(initialState, {
        type: types.ADD_PATTERN,
        pattern: addedPattern
      }).patternList
    ).toEqual(
      addedState
    )
  })

  it('should handle SELECT_PATTERN', () => {
    expect(
      RiveterReducer([], {
        type: types.SELECT_PATTERN,
        name: "basic.punctuation"
      })
    ).toEqual(
        {
          currentPattern: "basic.punctuation"
        }
    )
  })

  it('should handle DESELECT_PATTERN', () => {
    expect(
      RiveterReducer([], {
        type: types.SELECT_PATTERN
      })
    ).toEqual(
        {
          currentPattern: undefined
        }
    )
  })
})
