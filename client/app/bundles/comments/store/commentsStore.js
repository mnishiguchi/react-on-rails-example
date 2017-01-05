import { compose, createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware             from 'redux-thunk'
import loggerMiddleware            from 'libs/middlewares/loggerMiddleware'

import reducers, { initialStates } from '../reducers'

export default (props, railsContext) => {
  const initialComments     = props.comments

  const { $$commentsState } = initialStates

  const initialState = {
    $$commentsStore: $$commentsState.merge({
      $$comments: initialComments,
    }),
    railsContext,
  }

  const middleware = [thunkMiddleware, loggerMiddleware]
  const reducer    = combineReducers(reducers)

  const composedStore = compose(
    applyMiddleware(...middleware),
  )

  return composedStore( createStore )( reducer, initialState )
}
