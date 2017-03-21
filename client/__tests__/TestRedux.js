import * as actions from '../src/actions/index'
import * as types from '../src/actions/ActionTypes'

describe('actions', () => {
  it('should create an action to add a pattern', () => {
    const name = "Finish Docs"
    const pattern = ''
    const expectedAction = {
      type: types.ADD_PATTERN,
      name,
      pattern
    }
    expect(actions.addPattern(name, pattern)).toEqual(expectedAction)
  })
})
