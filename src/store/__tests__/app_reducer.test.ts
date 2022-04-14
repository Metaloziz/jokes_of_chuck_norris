import { JokeType } from 'api';
import {
  addJokeAC,
  appReducer,
  deleteCurrentJokeAC,
  deleteLassAddedJokeAC,
  deleteJokesAC,
  getJokeTC,
  setInitializedAC,
} from 'store';
import { RootStateType } from 'store/store';
import { commonConstants } from 'utils';

let initialState: RootStateType;
let joke: JokeType;
let jokes: JokeType[];

beforeEach(() => {
  joke = { id: '1', value: 'passage' };
  jokes = [
    { id: '2', value: 'passage' },
    { id: '3', value: 'reward' },
  ];

  initialState = {
    appState: {
      joke: { id: '', value: '' },
      jokes: [...jokes],
      isInitialize: false,
    },
  };
});

describe('app reducer', () => {
  test('set joke', () => {
    const { appState } = initialState;

    const action = getJokeTC.fulfilled(joke, '');
    const endState = appReducer(appState, action);

    expect(endState).not.toBe(appState);
    expect(endState.joke).toBe(joke);
  });

  test('add joke to my list', () => {
    const { appState } = initialState;
    const action = addJokeAC(joke);
    const endState = appReducer(appState, action);

    expect(endState).not.toBe(appState);
    expect(endState.jokes[commonConstants.FIRST_JOKE]).toBe(joke);
  });

  test('delete last joke from jokes', () => {
    const { appState } = initialState;
    const action = deleteLassAddedJokeAC();
    const endState = appReducer(appState, action);

    expect(endState).not.toBe(appState);
    expect(endState.jokes.length).toBe(appState.jokes.length - commonConstants.ONE);
  });

  test('delete current joke', () => {
    const { appState } = initialState;
    const action = deleteCurrentJokeAC('2');
    const endState = appReducer(appState, action);

    expect(endState).not.toBe(appState);
    expect(endState.jokes.length).toBe(appState.jokes.length - commonConstants.ONE);
  });

  test('delete all jokes', () => {
    const { appState } = initialState;
    const action = deleteJokesAC();
    const endState = appReducer(appState, action);

    expect(endState).not.toBe(appState);
    expect(endState.jokes.length).toBe(commonConstants.ZERO);
  });

  test('set initialize', () => {
    const { appState } = initialState;
    const action = setInitializedAC();
    const endState = appReducer(appState, action);

    expect(endState).not.toBe(appState);
    expect(endState.isInitialize).toBeTruthy();
  });
});
