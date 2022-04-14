import { Dispatch } from 'redux';

import { JokeType } from 'api/api';
import { addJokeAC, getJokeTC } from 'store/app_reducer';
import { storageKeys } from 'utils/enum';

export const getLocalStorageData = (dispatch: Dispatch): void => {
  const jokeLocalStorage = localStorage.getItem(storageKeys.JOKE);
  const jokesLocalStorage = localStorage.getItem(storageKeys.JOKES);
  if (jokeLocalStorage) {
    const item: JokeType = JSON.parse(jokeLocalStorage);
    dispatch(getJokeTC.fulfilled(item, ''));
  }
  if (jokesLocalStorage) {
    const items: JokeType[] = JSON.parse(jokesLocalStorage);
    items.forEach(el => dispatch(addJokeAC(el)));
  }
};
