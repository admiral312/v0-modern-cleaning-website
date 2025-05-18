"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface WaveAnimationProps {
  position?: "top" | "bottom"
  color?: string
  height?: number
  className?: string
}

export default function WaveAnimation({
  position = "bottom",
  color = "#1e5b84",
  height = 120,
  className = "",
}: WaveAnimationProps) {
  const waveRef1 = useRef<SVGPathElement>(null)
  const waveRef2 = useRef<SVGPathElement>(null)
  const waveRef3 = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (waveRef1.current && waveRef2.current && waveRef3.current) {
      // First wave animation
      gsap.to(waveRef1.current, {
        x: -1000,
        repeat: -1,
        duration: 25,
        ease: "linear",
      })

      // Second wave animation (slower)
      gsap.to(waveRef2.current, {
        x: -1000,
        repeat: -1,
        duration: 35,
        ease: "linear",
      })

      // Third wave animation (faster)
      gsap.to(waveRef3.current, {
        x: -1000,
        repeat: -1,
        duration: 20,
        ease: "linear",
      })
    }
  }, [])

  return (
    <div
      className={`absolute ${position === "top" ? "top-0" : "bottom-0"} left-0 w-full overflow-hidden leading-none ${className}`}
      style={{ height: `${height}px` }}
    >
      <svg
        className={`absolute ${position === "top" ? "bottom-0" : "top-0"} left-0 w-[200%] h-full`}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g>
          <use ref={waveRef1} xlinkHref="#wave-path" x="1000" y="0" fill={`${color}20`} />
          <use ref={waveRef2} xlinkHref="#wave-path" x="1000" y="3" fill={`${color}40`} />
          <use ref={waveRef3} xlinkHref="#wave-path" x="1000" y="5" fill={`${color}60`} />
        </g>
      </svg>
    </div>
  )
}
