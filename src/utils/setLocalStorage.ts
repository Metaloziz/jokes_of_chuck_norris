import {JokeType} from "api/api";


export const setJokeLocalStorage = (props: JokeType) => {
  if (props.value !== "" && props.value !== 'loading ... ') {
    localStorage.setItem('joke', JSON.stringify(props))
  }
}

export const setJokesLocalStorage = (props: JokeType[]) => {
  if (props.length !== 0) {
    localStorage.setItem('jokes', JSON.stringify(props))
  }
}