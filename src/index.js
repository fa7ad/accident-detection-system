import * as React from 'react'
import ReactDOM from 'react-dom'
import DayjsUtils from '@date-io/dayjs'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { colors, createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core'

import App from './App'

import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.deepPurple[500]
    },
    secondary: {
      main: colors.blueGrey[700]
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
