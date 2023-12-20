import { useEffect, useState } from 'react'

export const useInstagramTabs = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [timer, setTime] = useState(0)
  const limit = 400
  const STEPS = 4

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === limit) {
        clearInterval(interval)
        setTime(0)
        setActiveCard((prev) => prev > STEPS - 2 ? 0 : prev + 1)
      } else {
        setTime(prev => prev + 10)
      }
    }, 100)
    return () => { clearInterval(interval) }
  }, [timer])

  const advanceTab = (): void => {
    setActiveCard(prev => prev === STEPS - 1 ? 0 : prev + 1)
    setTime(0)
  }

  const returnTab = (): void => {
    setActiveCard(prev => prev === 0 ? prev + 0 : prev - 1)
    setTime(0)
  }

  return { activeCard, advanceTab, returnTab, timer, STEPS }
}
