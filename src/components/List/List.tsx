import React from "react";
import style from './List.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getJokesSelector} from "utils/selectors";
import {deleteCurrentJokeAC, deleteJokesAC} from "store/app_reducer";
import {JokeList} from "components/JokeList/JokeList";

export const List = () => {

  const dispatch = useDispatch()

  const deleteJokes = () => {
    dispatch(deleteJokesAC())
  }
  const deleteJoke = (jokeId: string) => {
    dispatch(deleteCurrentJokeAC(jokeId))
  }
  const jokes = useSelector(getJokesSelector)

  return <div className={style.container}>
    <div className={style.jokes}>
      {jokes.map(({id, value}) => <JokeList deleteJoke={() => deleteJoke(id)}
                                            key={id} value={value}/>)}</div>
    <div>
      <button className={style.deleteJokes} onClick={deleteJokes}>delete all jokes
      </button>
    </div>
  </div>
};