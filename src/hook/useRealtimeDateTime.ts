import { useState, useEffect } from 'react'
import dayjs from 'dayjs'

function useRealtimeDateTime(intervalMs = 1000) {
  const [dateTime, setDateTime] = useState(dayjs())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(dayjs())
    }, intervalMs)

    return () => {
      clearInterval(interval)
    }
  }, [intervalMs])

  return dateTime
}

export default useRealtimeDateTime
