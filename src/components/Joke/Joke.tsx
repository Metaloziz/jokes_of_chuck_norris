import style from "components/Display/Display.module.scss";
import {FC} from "react";
import {JokeType} from "api/api";

type JokeTypeComponent = {
  localJoke: JokeType
  addJokeToList: (value: JokeType) => void
}


export const Joke: FC<JokeTypeComponent> = ({localJoke, addJokeToList}) => {


  return <div
    className={style.displayText}>
    <div>{localJoke.value}</div>
    <button onClick={() => addJokeToList(localJoke)}>add to my list</button>
  </div>
};