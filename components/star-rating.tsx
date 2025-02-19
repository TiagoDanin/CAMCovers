"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function StarRating({ rating }: { rating: number }) {
  const [currentRating, setCurrentRating] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setCurrentRating(rating)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [inView, rating])

  return (
    <div ref={ref} className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Star
            className={`w-4 h-4 ${
              i < currentRating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
            }`}
          />
        </motion.div>
      ))}
    </div>
  )
}

