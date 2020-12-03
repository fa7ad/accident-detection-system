import * as React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter } from 'react-router-dom'

import Routes from './Routes'

import reportWebVitals from './reportWebVitals'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import './index.css'

const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
