"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Review {
  name: string
  source: string
  rating: number
  comment: string
}

export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % reviews.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [reviews.length])

  return (
    <div className="h-24 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="flex items-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600">{reviews[currentIndex].comment}</p>
          <p className="text-sm font-medium mt-2">{reviews[currentIndex].name}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

