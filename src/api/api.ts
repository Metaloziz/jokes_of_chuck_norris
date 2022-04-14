import axios from 'axios';

type ApiResponseType = {
  id: string;
  value: string;
  categories: [];
  created_at: string;
  icon_url: string;
  updated_at: string;
  url: string;
};
export type JokeType = Pick<ApiResponseType, 'value' | 'id'>;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const appRequest = {
  getJoke: () => instance.get<JokeType>('/'),
};
