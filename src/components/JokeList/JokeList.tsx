import React, {FC} from "react";
import style from "./JokeList.module.scss";

type JokeListType = {
  value: string
  deleteJoke: () => void
}
export const JokeList: FC<JokeListType> = ({value, deleteJoke}) => {
  return <div className={style.joke}>
    <div className={style.text}>{value}</div>
    <button onClick={deleteJoke}>delete</button>
  </div>
};