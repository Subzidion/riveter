import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'

class Header extends Component {
  render() {
    return (
      <AppBar
        title="Riveter"
        showMenuIconButton={false}
        iconElementRight={
          <IconButton iconClassName="fa fa-github" href="https://github.com/subzidion/riveter" />
        }
      />
    )
  }
}

export default Header
