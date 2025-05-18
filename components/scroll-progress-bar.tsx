"use client"

import { useEffect, useState } from "react"

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      const clientHeight = document.documentElement.clientHeight || window.innerHeight
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100
      setWidth(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <div className="scroll-progress fixed top-0 left-0 z-50" style={{ width: `${width}%` }} />
}
