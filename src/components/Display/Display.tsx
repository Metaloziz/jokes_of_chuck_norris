import { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import style from './Display.module.scss';

import { JokeType } from 'api';
import { Joke } from 'components';
import {
  addJokeAC,
  deleteCurrentJokeAC,
  deleteLassAddedJokeAC,
  getJokeTC,
  setInitializedAC,
} from 'store';
import {
  commonConstants,
  getJokeSelector,
  getJokesSelector,
  getLocalStorageData,
  isInitializedSelector,
  setJokeLocalStorage,
  setJokesLocalStorage,
  useJokesEveryTimer,
} from 'utils';

export const Display: FC = () => {
  const dispatch = useDispatch();
  const joke = useSelector(getJokeSelector);
  const jokes = useSelector(getJokesSelector);
  const isInitialized = useSelector(isInitializedSelector);

  useEffect(() => {
    setJokeLocalStorage(joke);
  }, [joke]);

  useEffect(() => {
    setJokesLocalStorage(jokes);
  }, [jokes]);

  useEffect(() => {
    if (!isInitialized) {
      dispatch(setInitializedAC());
      getLocalStorageData(dispatch);
    }
  }, []);

  const getJoke = (): void => {
    dispatch(getJokeTC.fulfilled({ id: 'fake', value: 'loading ... ' }, ''));
    dispatch(getJokeTC());
  };

  const { isTimer, timer, getJokesEveryTimer } = useJokesEveryTimer(getJoke);

  const addJokeToList = (jokeLocal: JokeType): void => {
    const result = jokes.find(({ id }) => jokeLocal.id === id);
    if (!result) {
      if (jokes.length === commonConstants.MAX_JOKES) dispatch(deleteLassAddedJokeAC());
      dispatch(addJokeAC(jokeLocal));
    } else {
      dispatch(deleteCurrentJokeAC(jokeLocal.id));
    }
  };

  const nameGetJokeEveryTimerButton = isTimer ? 'stop' : 'get a joke every 3 sec';
  const isDisableGetJokeButton = !!isTimer || joke.value === 'loading ... ';

  return (
    <div className={style.container}>
      <div className={style.display}>
        <Joke
          localJoke={joke}
          addJokeToList={addJokeToList}
          isTheSameJoke={joke.id === jokes[commonConstants.FIRST_JOKE]?.id}
        />
        <div className={style.timer}>{isTimer && <div>{timer}</div>}</div>
      </div>
      <div className={style.buttons}>
        <button type="button" disabled={isDisableGetJokeButton} onClick={getJoke}>
          get
        </button>
        <button type="button" onClick={getJokesEveryTimer}>
          {nameGetJokeEveryTimerButton}
        </button>
      </div>
    </div>
  );
};
