import {RootStateType} from "store/store";
import {JokeType} from "api/api";

export const getJokeSelector = (state: RootStateType): JokeType => {
  return state.appState.joke
}
export const getJokesSelector = (state: RootStateType): JokeType[] => {
  return state.appState.jokes
}

export const isInitializedSelector = (state: RootStateType): boolean => {
  return state.appState.isInitialize
}

