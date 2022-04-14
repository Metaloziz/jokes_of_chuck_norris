import { Dispatch } from 'redux';

import { JokeType } from 'api/api';
import { addJokeAC, getJokeTC } from 'store/app_reducer';

export const getLocalStorageData = (dispatch: Dispatch): void => {
  const jokeLocalStorage = localStorage.getItem('joke');
  const jokesLocalStorage = localStorage.getItem('jokes');
  if (jokeLocalStorage) {
    const item: JokeType = JSON.parse(jokeLocalStorage);
    dispatch(getJokeTC.fulfilled(item, ''));
  }
  if (jokesLocalStorage) {
    const items: JokeType[] = JSON.parse(jokesLocalStorage);
    items.forEach(el => dispatch(addJokeAC(el)));
  }
};
