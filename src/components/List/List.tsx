import React from "react";
import style from './List.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getJokesSelector} from "utils/selectors";
import {deleteJokesAC} from "store/app_reducer";

export const List = () => {

  const dispatch = useDispatch()

  const deleteJokes = () => {
    dispatch(deleteJokesAC())
  }
  const jokes = useSelector(getJokesSelector)

  return <div className={style.container}>
    <div className={style.jokes}>
      {jokes.map(({id, value}) => <div key={id}
                                       className={style.item}>{value}</div>)}</div>
    <div>
      <button onClick={deleteJokes}>delete all jokes</button>
    </div>
  </div>
};