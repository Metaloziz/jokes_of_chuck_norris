import React, { FC, memo } from 'react'

import style from './JokeList.module.scss'

export type JokeListType = {
  id: string
  value: string
  deleteJoke: (id: string) => void
}
export const JokeList: FC<JokeListType> = memo(({ value, deleteJoke, id }) => (
  <div id={id} className={style.joke}>
    <div className={style.text}>{value}</div>
    <button type="button" onClick={() => deleteJoke(id)}>
      delete
    </button>
  </div>
))
