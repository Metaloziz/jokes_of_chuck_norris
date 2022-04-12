import React from "react";
import style from './List.module.scss'
import {useSelector} from "react-redux";
import {getJokesSelector} from "utils/selectors";

export const List = () => {

  console.log('list - render')

  const jokes = useSelector(getJokesSelector)

  return <div className={style.container}>
    {jokes.map(({id, value}) => <div key={id}
                                     className={style.item}>{value}</div>)}
  </div>
};