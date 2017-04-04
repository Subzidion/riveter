import * as actions from '../src/actions/index'
import * as types from '../src/actions/ActionTypes'

// Add pattern
describe('actions', () => {
  it('should create an action to add a pattern', () => {
    const name = 'digits'
    const pattern = '[:digit:]+'
    const expectedAction = {
      type: types.ADD_PATTERN,
      name,
      pattern
    }
    expect(actions.addPattern(name, pattern)).toEqual(expectedAction)
  })
})

// Select pattern
describe('actions', () => {
  it('should create an action to select a pattern', () => {
    const name = 'basic.matchall'
    const expectedAction = {
      type: types.SELECT_PATTERN,
      name
    }
    expect(actions.selectPattern(name)).toEqual(expectedAction)
  })
})

// Deselect pattern
describe('actions', () => {
  it('should create an action to deselect a pattern', () => {
    const name = 'basic.matchall'
    const expectedAction = {
      type: types.DESELECT_PATTERN,
      name
    }
    expect(actions.deselectPattern(name)).toEqual(expectedAction)
  })
})

// ????  Change text
/*describe('actions', () => {
  it('should create an action to add a pattern', () => {
    const text = 'blah'
    const expectedAction = {
      type: types.CHANGE_TEXT,
      text
    }
    expect(actions.changeText(text)).toEqual(expectedAction)
  })
})*/

// Request data
describe('actions', () => {
  it('should create an action to request data', () => {
    const expectedAction = {
      type: types.REQUEST_DATA
    }
    expect(actions.requestData()).toEqual(expectedAction)
  })
})

// ????? Receive data
describe('actions', () => {
  it('should create an action to receive data', () => {
    const data = 'digits'
    const expectedAction = {
      type: types.RECEIVE_DATA,
      data
    }
    expect(actions.receiveData(data)).toEqual(expectedAction)
  })
})

// Receive error
describe('actions', () => {
  it('should create an action to receive an error', () => {
    const data = 'digits'
    const expectedAction = {
      type: types.RECEIVE_ERROR,
      data
    }
    expect(actions.receiveError(data)).toEqual(expectedAction)
  })
})
