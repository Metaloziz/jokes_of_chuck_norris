import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { appRequest, JokeType } from 'api/api'
import { storageKeys } from 'utils'

const initialState = {
  joke: {
    id: '',
    value: '',
  } as JokeType,
  jokes: [] as JokeType[],
  isInitialize: false,
}

export const getJokeTC = createAsyncThunk('app/getJokeTC', async () => {
  try {
    const res = await appRequest.getJoke()
    return res.data
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e)
    return null
  }
})

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addJokeAC(state, action: PayloadAction<JokeType>) {
      state.jokes.unshift(action.payload)
    },
    deleteLassAddedJokeAC(state) {
      const arrLength = state.jokes.length
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      state.jokes.splice(arrLength - 1, 1)
    },
    deleteCurrentJokeAC(state, action: PayloadAction<string>) {
      state.jokes = state.jokes.filter(({ id }) => id !== action.payload)
    },
    deleteJokesAC(state) {
      state.jokes = []
      localStorage.removeItem(storageKeys.JOKES)
    },
    setInitializedAC(state) {
      state.isInitialize = true
    },
  },
  extraReducers: builder => {
    builder.addCase(getJokeTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.joke = action.payload
      }
    })
  },
})

export const appReducer = slice.reducer
export const {
  addJokeAC,
  deleteLassAddedJokeAC,
  deleteCurrentJokeAC,
  deleteJokesAC,
  setInitializedAC,
} = slice.actions
