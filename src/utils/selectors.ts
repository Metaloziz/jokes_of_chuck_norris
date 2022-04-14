import { JokeType } from 'api/api';
import { RootStateType } from 'store/store';

export const getJokeSelector = (state: RootStateType): JokeType => state.appState.joke;
export const getJokesSelector = (state: RootStateType): JokeType[] =>
  state.appState.jokes;

export const isInitializedSelector = (state: RootStateType): boolean =>
  state.appState.isInitialize;
