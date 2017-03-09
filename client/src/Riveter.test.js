import React from 'react'
import ReactDOM from 'react-dom'
import Riveter from './Riveter'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Riveter />, div)
})
