import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import cyan from '@material-ui/core/colors/cyan'
import grey from '@material-ui/core/colors/grey'
import App from './containers/App'

const muiTheme = createMuiTheme({
  palette: {
    fontFamily: 'Roboto',
    primary: cyan,
    alternateTextColor: grey
  },
  appBar: {
    height: 60,
    color: '#008080'
  },
  'checkbox': {
    'boxColor': '#455a64',
    'checkedColor': '#00b0ff'
  }
})

const Root = () => {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <App />
    </MuiThemeProvider>
  )
}

export default Root