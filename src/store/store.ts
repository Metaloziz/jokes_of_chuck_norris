import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from 'store/app_reducer';

const rootReducer = combineReducers({
  appState: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootStateType = ReturnType<typeof store.getState>;
