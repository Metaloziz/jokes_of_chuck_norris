import style from 'components/Display/Display.module.scss'
import {
  addJokeAC,
  deleteCurrentJokeAC,
  deleteJokeFromListAC,
  getJokeTC
} from "store/app_reducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getJokeSelector, getJokesSelector} from "utils/selectors";
import {Joke} from "components/Joke/Joke";
import {Timer} from "components/Timer/Timer";
import {JokeType} from "api/api";
import {setJokeLocalStorage, setJokesLocalStorage} from "utils/setLocalStorage";


export const Display = () => {

  const dispatch = useDispatch()
  const joke = useSelector(getJokeSelector)
  const jokes = useSelector(getJokesSelector)
  const [isTimer, setIsTimer] = useState<NodeJS.Timer | null>(null)

  useEffect(() => {
    setJokeLocalStorage(joke)
  }, [joke])

  useEffect(() => {
    setJokesLocalStorage(jokes)
  }, [jokes])

  useEffect(() => {
    let jokeLocalStorage = localStorage.getItem('joke')
    let jokesLocalStorage = localStorage.getItem('jokes')
    if (!!jokeLocalStorage) {
      let item: JokeType = JSON.parse(jokeLocalStorage)
      dispatch(getJokeTC.fulfilled(item, ''))
    }
    if (!!jokesLocalStorage) {
      let items: JokeType[] = JSON.parse(jokesLocalStorage)
      items.forEach((el) => dispatch(addJokeAC(el)))
    }


  }, [])

  const getJoke = async () => {
    dispatch(getJokeTC.fulfilled({id: 'fake', value: 'loading ... '}, ''))
    await dispatch(getJokeTC())
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
      if (jokes.length === 4) dispatch(deleteJokeFromListAC())
      dispatch(addJokeAC(joke))
    } else {
      console.warn('joke is here')
      dispatch(deleteCurrentJokeAC(joke.id))
    }
  }

  return (
    <div className={style.container}>
      <div className={style.display}>
        <Joke localJoke={joke} addJokeToList={addJokeToList}/>
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