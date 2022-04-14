import style from 'components/Display/Display.module.scss'
import {
  addJokeAC,
  deleteCurrentJokeAC,
  deleteLassAddedJokeAC,
  getJokeTC,
  setInitializedAC
} from "store/app_reducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
  getJokeSelector,
  getJokesSelector,
  isInitializedSelector
} from "utils/selectors";
import {Joke} from "components/Joke/Joke";
import {JokeType} from "api/api";
import {setJokeLocalStorage, setJokesLocalStorage} from "utils/setLocalStorage";
import {getLocalStorageData} from "utils/getLocakStorageData";


export const Display = () => {

  const dispatch = useDispatch()
  const joke = useSelector(getJokeSelector)
  const jokes = useSelector(getJokesSelector)
  const isInitialized = useSelector(isInitializedSelector)
  const [isTimer, setIsTimer] = useState<NodeJS.Timer | null>(null)
  const [time, setTime] = useState<number>(5)

  useEffect(() => {
    setJokeLocalStorage(joke)
  }, [joke])

  useEffect(() => {
    setJokesLocalStorage(jokes)
  }, [jokes])

  useEffect(() => {
    if (!isInitialized) {
      dispatch(setInitializedAC())
      getLocalStorageData(dispatch)
    }
  }, [])

  const getJoke = () => {
    dispatch(getJokeTC.fulfilled({id: 'fake', value: 'loading ... '}, ''))
    dispatch(getJokeTC())
  }

  const getJokesEveryTimer = () => {
    if (!isTimer) {
      const intervalId = setInterval(() => {
        setTime(time => {
          if (time !== 0) return time - 1
          getJoke()
          return 5
        })
      }, 1000)

      setIsTimer(intervalId)
    } else {
      clearInterval(isTimer)
      setIsTimer(null)
    }
  }

  const addJokeToList = (joke: JokeType) => {
    const result = jokes.find((item) => joke.id === item.id)
    if (!result) {
      if (jokes.length === 4) dispatch(deleteLassAddedJokeAC())
      dispatch(addJokeAC(joke))
    } else {
      dispatch(deleteCurrentJokeAC(joke.id))
    }
  }

  const nameGetJokeEveryTimerButton = !!isTimer ? "stop" : "get a joke every 3 sec"
  const isDisableGetJokeButton = !!isTimer || joke.value === 'loading ... '

  return (
    <div className={style.container}>
      <div className={style.display}>
        <Joke localJoke={joke}
              addJokeToList={addJokeToList}
              isTheSameJoke={joke.id === jokes[0]?.id}/>
        <div className={style.timer}>
          {isTimer && <div>{time}</div>}
        </div>
      </div>
      <div className={style.buttons}>
        <button disabled={isDisableGetJokeButton} onClick={getJoke}>get</button>
        <button onClick={getJokesEveryTimer}>{nameGetJokeEveryTimerButton}</button>
      </div>
    </div>
  );
};