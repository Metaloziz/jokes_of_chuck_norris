import style from 'components/Display/Display.module.scss'
import {addJokeAC, getJokeTC} from "store/app_reducer";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getJokeSelector, getJokesSelector} from "utils/selectors";
import {Joke} from "components/Joke/Joke";
import {Timer} from "components/Timer/Timer";
import {JokeType} from "api/api";


export const Display = () => {

  const dispatch = useDispatch()
  const jokes = useSelector(getJokesSelector)
  const joke = useSelector(getJokeSelector)
  const [localJoke, setLocalJoke] = useState<string>(joke.value)
  const [isTimer, setIsTimer] = useState<NodeJS.Timer | null>(null)

  const getJoke = async () => {
    setLocalJoke('loading ... ')
    await dispatch(getJokeTC())
    setLocalJoke(joke.value)
  }

  const getJokesEveryTimer = () => {
    if (!isTimer) {
      const intervalId = setInterval(getJoke, 5000)
      setIsTimer(intervalId)
    }
    if (isTimer) {
      clearInterval(isTimer)
      setIsTimer(null)
    }
  }

  const addJokeToList = (joke: JokeType) => {

    const result = jokes.find((item) => joke.id === item.id)
    if (!result) {
      dispatch(addJokeAC(joke))
      return;
    }
    console.warn('joke is here')

  }


  return (
    <div className={style.container}>
      <div className={style.display}>
        <Joke localJoke={joke} addJokeToList={addJokeToList}/>
        <div>{}</div>
        <div>
          {isTimer && <Timer/>}
        </div>
      </div>
      <div className={style.buttons}>
        <button disabled={!!isTimer} onClick={getJoke}>get</button>
        <button onClick={getJokesEveryTimer}>get a joke every 3 sec</button>
      </div>
    </div>
  );
};