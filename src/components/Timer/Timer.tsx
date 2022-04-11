import {useEffect, useState} from "react";

export const Timer = () => {

  const [time, setTime] = useState<number>(5)

  useEffect(() => {

    const intervalId = setInterval(() => {
      console.log('tick')
      setTime(time - 1)
    }, 1000)

    return () => {
      console.log('end')
      clearInterval(intervalId)
    }

  }, [])

  return <div>{time}</div>;
};