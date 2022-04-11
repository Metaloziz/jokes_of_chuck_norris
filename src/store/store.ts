import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {app_reducer} from "store/app_reducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
  appState: app_reducer,
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>