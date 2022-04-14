import { useState } from 'react';

import { commonConstants } from 'utils';

type TimerType = ReturnType<typeof setInterval>;

type useGetJokesEveryTimerReturnType = {
  getJokesEveryTimer: () => void;
  timer: number;
  isTimer: TimerType | null;
};

export const useJokesEveryTimer = (
  getJoke: () => void,
): useGetJokesEveryTimerReturnType => {
  const [isTimer, setIsTimer] = useState<TimerType | null>(null);
  const [timer, setTime] = useState<number>(commonConstants.MAX_TIMER_SEC);

  const getJokesEveryTimer = (): void => {
    if (!isTimer) {
      const intervalId = setInterval(() => {
        setTime(time => {
          if (time !== commonConstants.MIN_TIMER_SEC)
            return time - commonConstants.DECREMENT_TIMER_SEC;
          getJoke();
          return commonConstants.MAX_TIMER_SEC;
        });
      }, commonConstants.TIMER_MS);

      setIsTimer(intervalId);
    } else {
      clearInterval(isTimer);
      setIsTimer(null);
    }
  };
  return { getJokesEveryTimer, timer, isTimer };
};
