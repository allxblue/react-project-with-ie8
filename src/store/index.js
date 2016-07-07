import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {routerReducer} from 'react-router-redux/lib/reducer'
import routerMiddleware from 'react-router-redux/lib/middleware'
import { logger, thunk } from './middleware'
import thunkMiddleware from 'redux-thunk'
import * as reducers from './reducers'


/* 要從外部注入後端的初始 state  */
export function configureStore(history, initialState) {
  
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const reducer = combineReducers({
    ...reducers
    , routing: routerReducer
  })



  // const combineInitState = objectAssign({}, initState, initialState)

  //createStore(reducer, [initialState], [enhancer])
  const createStoreWithMiddleware = applyMiddleware( 
    logger,
    thunkMiddleware,
    routerMiddleware(history)
  )(create);

  const store = createStoreWithMiddleware(reducer, initialState);
  return store
}


