import {
  addJokeAC,
  app_reducer,
  deleteJokeFromListAC,
  setJokeAC
} from "store/app_reducer";
import {RootStateType} from "store/store";
import {JokeType} from "api/api";


let initialState: RootStateType
let joke: JokeType
let jokes: JokeType[]

beforeEach(() => {
  initialState = {
    appState: {
      joke: {id: '', value: ''},
      jokes: []
    }
  }

  joke = {id: '1', value: 'passage'}
  jokes = [{id: '1', value: 'passage'}, {id: '2', value: 'reward'}]

})


describe('app reducer', () => {
  test('set joke', () => {

    const {appState} = initialState

    const action = setJokeAC(joke)
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

  test('delete item from jokes', () => {

    const {appState} = initialState
    const action = deleteJokeFromListAC()
    const endState = app_reducer(appState, action)



  })
})