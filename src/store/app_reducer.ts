import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appRequest, JokeType} from "api/api";

const initialState = {
  joke: {
    id: '',
    value: ''
  } as JokeType,
  jokes: [] as JokeType[]
}

export const getJokeTC = createAsyncThunk('app/getJokeTC', async () => {
  const res = await appRequest.getJoke()
  return res.data
})

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addJokeAC(state, action: PayloadAction<JokeType>) {
      state.jokes.unshift(action.payload)
    },
    deleteJokeFromListAC(state) {
      let arrLength = state.jokes.length
      state.jokes.splice(arrLength - 1, 1)
    },
    deleteCurrentJokeAC(state, action: PayloadAction<string>) {
      state.jokes = state.jokes.filter((el) => el.id !== action.payload)
    },
    deleteJokesAC(state) {
      state.jokes = []
      localStorage.removeItem('jokes')
    },
  },
  extraReducers: builder => {
    builder.addCase(getJokeTC.fulfilled, (state, action) => {
      state.joke = action.payload
    })
  }
})

export const app_reducer = slice.reducer
export const {
  addJokeAC,
  deleteJokeFromListAC,
  deleteCurrentJokeAC,
  deleteJokesAC
} = slice.actions

