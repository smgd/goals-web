import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

Sentry.init({ dsn: 'https://c9f2cd47a29d4260ae1c2295d21030db@sentry.io/2179662' })

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
