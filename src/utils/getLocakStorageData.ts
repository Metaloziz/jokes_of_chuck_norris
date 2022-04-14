import {JokeType} from "api/api";
import {addJokeAC, getJokeTC} from "store/app_reducer";
import {Dispatch} from "redux";

export const getLocalStorageData = (dispatch: Dispatch) => {
  let jokeLocalStorage = localStorage.getItem('joke')
  let jokesLocalStorage = localStorage.getItem('jokes')
  if (!!jokeLocalStorage) {
    let item: JokeType = JSON.parse(jokeLocalStorage)
    dispatch(getJokeTC.fulfilled(item, ''))
  }
  if (!!jokesLocalStorage) {
    let items: JokeType[] = JSON.parse(jokesLocalStorage)
    items.forEach((el) => dispatch(addJokeAC(el)))
  }
}