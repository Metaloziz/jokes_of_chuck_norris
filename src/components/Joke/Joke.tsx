import style from "./Joke.module.scss";
import {FC} from "react";
import {JokeType} from "api/api";

type JokeTypeComponent = {
  localJoke: JokeType
  addJokeToList: (value: JokeType) => void
  isTheSameJoke: boolean
}


export const Joke: FC<JokeTypeComponent> = ({
                                              localJoke,
                                              addJokeToList,
                                              isTheSameJoke
                                            }) => {


  const nameButton = isTheSameJoke ? 'delete joke from the list' : 'add to my list'

  return <div
    className={style.displayText}>
    <div>{localJoke.value}</div>
    <button onClick={() => addJokeToList(localJoke)}>{nameButton}</button>
  </div>
};