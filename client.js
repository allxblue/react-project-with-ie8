import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Link, browserHistory } from 'react-router'
import syncHistoryWithStore from 'react-router-redux/lib/sync'
// import configure from './store'

import { configureStore } from './src/store'
import { Home } from './src/containers'



let state = window.__initialState__ || undefined
// const store = configureStore(browserHistory, state)

const store = configureStore(browserHistory, state)
const history = syncHistoryWithStore(browserHistory, store)
// window._log = log4af()
window._log = {info:function(){}, test:function(){}, api:function(){}, debug:function(){}}


render(
  
  <Provider store={store}>
  	<Home />
  </Provider>,
  document.getElementById('react-root')
)

