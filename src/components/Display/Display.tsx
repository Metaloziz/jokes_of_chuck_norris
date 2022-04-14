import style from 'components/Display/Display.module.scss'
import {
  addJokeAC,
  deleteCurrentJokeAC,
  deleteJokeFromListAC,
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
import {Timer} from "components/Timer/Timer";
import {JokeType} from "api/api";
import {setJokeLocalStorage, setJokesLocalStorage} from "utils/setLocalStorage";
import {getLocalStorageData} from "utils/getLocakStorageData";


export const Display = () => {

  const dispatch = useDispatch()
  const joke = useSelector(getJokeSelector)
  const jokes = useSelector(getJokesSelector)
  const isInitialized = useSelector(isInitializedSelector)
  const [isTimer, setIsTimer] = useState<NodeJS.Timer | null>(null)

  const theSame = joke.id === jokes[0]?.id

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

  const nameButton = !!isTimer ? "stop" : "get a joke every 3 sec"

  return (
    <div className={style.container}>
      <div className={style.display}>
        <Joke localJoke={joke} addJokeToList={addJokeToList}
              isTheSameJoke={theSame}/>
        <div>
          {isTimer && <Timer/>}
        </div>
      </div>
      <div className={style.buttons}>
        <button disabled={!!isTimer} onClick={getJoke}>get</button>
        <button onClick={getJokesEveryTimer}>{nameButton}</button>
      </div>
    </div>
  );
};