import {applyMiddleware, combineReducers, createStore} from "redux";
import {mainReducer} from "./mainReducer";
import ReduxThunk from 'redux-thunk'

const reducers = combineReducers({
  main: mainReducer
});

export const store = createStore(reducers, applyMiddleware(ReduxThunk));

window.store = store;