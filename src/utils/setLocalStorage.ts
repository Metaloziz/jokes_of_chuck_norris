import { JokeType } from 'api'
import { commonConstants, storageKeys } from 'utils'

export const setJokeLocalStorage = (props: JokeType): void => {
  if (props.value !== '' && props.value !== 'loading ... ') {
    localStorage.setItem(storageKeys.JOKE, JSON.stringify(props))
  }
}

export const setJokesLocalStorage = (props: JokeType[]): void => {
  if (props.length !== commonConstants.EMPTY_ARR) {
    localStorage.setItem(storageKeys.JOKES, JSON.stringify(props))
  }
}
