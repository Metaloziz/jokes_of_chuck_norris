import React, {useEffect} from "react";
import style from './List.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getJokesSelector, isInitializedSelector} from "utils/selectors";
import {
  deleteCurrentJokeAC,
  deleteJokesAC,
  setInitializedAC
} from "store/app_reducer";
import {JokeList} from "components/JokeList/JokeList";
import {getLocalStorageData} from "utils/getLocakStorageData";

export const List = () => {

  const dispatch = useDispatch()
  const jokes = useSelector(getJokesSelector)
  const isInitialized = useSelector(isInitializedSelector)

  useEffect(() => {
    if (!isInitialized) {
      dispatch(setInitializedAC())
      getLocalStorageData(dispatch)
    }
  }, [])


  const deleteJokes = () => {
    dispatch(deleteJokesAC())
  }
  const deleteJoke = (jokeId: string) => {
    dispatch(deleteCurrentJokeAC(jokeId))
  }

  return <div className={style.container}>
    <div className={style.jokes}>
      {jokes.map(({id, value}) => <JokeList deleteJoke={() => deleteJoke(id)}
                                            key={id} value={value}/>)}</div>
    <div>
      <button disabled={jokes.length === 0} className={style.deleteJokes}
              onClick={deleteJokes}>delete all jokes
      </button>
    </div>
  </div>
};