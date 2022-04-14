import {useEffect, useState} from "react";

const timer = 5

export const Timer = () => {

  const [time, setTime] = useState<number>(timer)


  useEffect(() => {

    setInterval(() => {
      console.log('tick')
      setTime(time => time !== 1 ? time - 1 : 5
      )
    }, 1000)

  }, [])

  return <div>{time}</div>;
};