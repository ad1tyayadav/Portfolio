"use client"

import { useEffect, useState } from "react"

interface ViewCounterProps {
  endValue: number
  duration?: number
}

export function ViewCounter({ endValue, duration = 2000 }: ViewCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const step = Math.floor(endValue / (duration / 50))
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= endValue) {
        current = endValue
        clearInterval(timer)
      }
      setCount(current)
    }, 50)

    return () => clearInterval(timer)
  }, [endValue, duration])

  return <div className="font-bold">{count.toLocaleString()}</div>
}
