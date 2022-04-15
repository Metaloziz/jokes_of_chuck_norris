import { FC } from 'react'

import style from './Joke.module.scss'

import { JokeType } from 'api'
import { LOADING } from 'utils'

type JokeTypeComponent = {
  localJoke: JokeType
  addJokeToList: (value: JokeType) => void
  isTheSameJoke: boolean
}

export const Joke: FC<JokeTypeComponent> = ({
  localJoke,
  addJokeToList,
  isTheSameJoke,
}) => {
  const nameButton = isTheSameJoke ? 'delete joke from the list' : 'add to my list'

  const isDisable = localJoke.value === LOADING || localJoke.value === ''

  return (
    <div className={style.displayText}>
      <div>{localJoke.value}</div>
      <button disabled={isDisable} type="button" onClick={() => addJokeToList(localJoke)}>
        {nameButton}
      </button>
    </div>
  )
}
