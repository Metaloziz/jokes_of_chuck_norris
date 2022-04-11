import axios from "axios";

type ApiResponseType = {
  id: string
  value: string
  categories: [],
  created_at: string
  icon_url: string
  updated_at: string
  url: string
}

export type JokeType = Pick<ApiResponseType, 'value' | 'id'>


export const instance = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/random'
})


export const appRequest = {
  getJoke: () => {
    return instance.get<JokeType>('/')
  }
}