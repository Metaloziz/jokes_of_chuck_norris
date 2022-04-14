import axios from 'axios';

type ApiResponseType = {
  id: string;
  value: string;
};

export type JokeType = Pick<ApiResponseType, 'value' | 'id'>;

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const appRequest = {
  getJoke: () => instance.get<JokeType>('/'),
};
