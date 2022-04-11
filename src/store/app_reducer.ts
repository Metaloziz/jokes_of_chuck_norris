import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appRequest, JokeType} from "api/api";

const initialState = {
  joke: {
    id: '',
    value: ''
  },
  jokes: [] as JokeType[]
}

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setJokeAC(state, action: PayloadAction<JokeType>) {
      state.joke = action.payload
    },
    addJokeAC(state, action: PayloadAction<JokeType>) {
      state.jokes.push(action.payload)
    },
    deleteJokeFromListAC(state) {
      state.jokes.pop()
    }
  },
})

export const app_reducer = slice.reducer
export const {setJokeAC, addJokeAC, deleteJokeFromListAC} = slice.actions

export const getJokeTC = createAsyncThunk('app/getJokeTC', async (params, {dispatch}) => {

  const res = await appRequest.getJoke()

  const joke = res.data
  dispatch(setJokeAC(joke))

})
