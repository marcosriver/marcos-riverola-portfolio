import { useEffect, useState } from 'react'
import projectsJson from '@/lib/projects.json'

export const useInstagramTabs = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [project, setProject] = useState(projectsJson[0])
  const [paused, pauseTimer] = useState(false)
  const [timer, setTime] = useState(0)
  const limit = projectsJson.length * 250
  const steps = projectsJson.length
  const percentage = (timer / limit) * 100

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer === limit) {
        clearInterval(interval)
        setTime(0)
        setActiveCard((prev) => prev > steps - 2 ? 0 : prev + 1)
      } else {
        if (!paused) {
          setTime(prev => prev + 10)
        }
      }
    }, 100)
    return () => { clearInterval(interval) }
  }, [timer, paused])

  useEffect(() => {
    setProject(projectsJson[activeCard])
  }, [activeCard])

  const advanceTab = (): void => {
    setActiveCard(prev => prev === steps - 1 ? 0 : prev + 1)
    setTime(0)
  }

  const returnTab = (): void => {
    setActiveCard(prev => prev === 0 ? prev + 0 : prev - 1)
    setTime(0)
  }

  return { activeCard, advanceTab, returnTab, timer, project, steps, percentage, pauseTimer, projectsJson, setActiveCard }
}
