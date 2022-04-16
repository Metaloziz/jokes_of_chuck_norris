import { FC, useCallback, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import style from './List.module.scss'

import { JokeList } from 'components'
import { deleteCurrentJokeAC, deleteJokesAC, setInitializedAC } from 'store'
import {
  commonConstants,
  getJokesSelector,
  getLocalStorageData,
  isInitializedSelector,
  setJokesLocalStorage,
} from 'utils'

export const List: FC = () => {
  const dispatch = useDispatch()
  const jokes = useSelector(getJokesSelector)
  const isInitialized = useSelector(isInitializedSelector)

  useEffect(() => {
    setJokesLocalStorage(jokes)
  }, [jokes])

  useEffect(() => {
    if (!isInitialized) {
      dispatch(setInitializedAC())
      getLocalStorageData(dispatch)
    }
  }, [])

  const deleteJokes = (): void => {
    dispatch(deleteJokesAC())
  }
  const deleteJoke = useCallback((jokeId: string): void => {
    dispatch(deleteCurrentJokeAC(jokeId))
  }, [])

  return (
    <div className={style.container}>
      <div className={style.jokes}>
        {jokes.map(({ id, value }) => (
          <JokeList key={id} id={id} deleteJoke={deleteJoke} value={value} />
        ))}
      </div>
      <div>
        <button
          type="button"
          disabled={jokes.length === commonConstants.FIRST_JOKE}
          className={style.deleteJokes}
          onClick={deleteJokes}
        >
          delete all jokes
        </button>
      </div>
    </div>
  )
}
