import {
  addJokeAC,
  app_reducer,
  deleteCurrentJokeAC,
  deleteLassAddedJokeAC,
  deleteJokesAC,
  getJokeTC,
  setInitializedAC,

} from "store/app_reducer";
import {RootStateType} from "store/store";
import {JokeType} from "api/api";


let initialState: RootStateType
let joke: JokeType
let jokes: JokeType[]

beforeEach(() => {

  joke = {id: '1', value: 'passage'}
  jokes = [{id: '2', value: 'passage'}, {id: '3', value: 'reward'}]

  initialState = {
    appState: {
      joke: {id: '', value: ''},
      jokes: [...jokes],
      isInitialize: false
    }
  }
})


describe('app reducer', () => {
  test('set joke', () => {

    const {appState} = initialState

    const action = getJokeTC.fulfilled(joke, '')
    const endState = app_reducer(appState, action)

    expect(endState).not.toBe(appState)
    expect(endState.joke).toBe(joke)
  })

  test('add joke to my list', () => {

    const {appState} = initialState
    const action = addJokeAC(joke)
    const endState = app_reducer(appState, action)

    expect(endState).not.toBe(appState)
    expect(endState.jokes[0]).toBe(joke)
  })

  test('delete last joke from jokes', () => {

    const {appState} = initialState
    const action = deleteLassAddedJokeAC()
    const endState = app_reducer(appState, action)

    expect(endState).not.toBe(appState)
    expect(endState.jokes.length).toBe(appState.jokes.length - 1)

  })

  test('delete current joke', () => {

    const {appState} = initialState
    const action = deleteCurrentJokeAC('2')
    const endState = app_reducer(appState, action)

    expect(endState).not.toBe(appState)
    expect(endState.jokes.length).toBe(appState.jokes.length - 1)
  })

  test('delete all jokes', () => {

    const {appState} = initialState
    const action = deleteJokesAC()
    const endState = app_reducer(appState, action)

    expect(endState).not.toBe(appState)
    expect(endState.jokes.length).toBe(0)
  })

  test('set initialize', () => {

    const {appState} = initialState
    const action = setInitializedAC()
    const endState = app_reducer(appState, action)

    expect(endState).not.toBe(appState)
    expect(endState.isInitialize).toBeTruthy()
  })
})