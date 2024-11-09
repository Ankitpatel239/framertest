'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
]

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorSize = useMotionValue(50)
  const cursorScale = useTransform(cursorSize, [40, 400], [1, 10])
  const controls = useAnimation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Check if we are on the client side
    setIsClient(true)
    
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e:MouseEvent) => {
        setMousePosition({ x: -e.clientX, y: -e.clientY })
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.div className="relative w-full h-screen overflow-hidden">
      {isClient && (
        <motion.div
          className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-8"
          animate={{
            x: mousePosition.x / window.innerWidth + 0.5,
            y: mousePosition.y / window.innerHeight + 0.5,
            transition: { duration: 0.5 }
          }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                translateX: (mousePosition.x * 10 / window.innerWidth + index) * 30,
                translateY: (mousePosition.y * 10 / window.innerHeight + index) * 15
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 30 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={src}
                alt={`Image ${index + 1}`}
                className="object-cover"
                initial={{ scale: 1.2 }}
                animate={{
                  scale: 1 + (Math.abs(mousePosition.x / window.innerWidth - 0.5) * index + 
                              Math.abs(mousePosition.y / window.innerHeight - 0.5)) * 0.2,
                  transition: { duration: 0.5 },
                  x: (mousePosition.x / window.innerWidth) * 10,
                  y: (mousePosition.y / window.innerHeight) * 10
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Inverse Cursor Fluid Background
        </motion.h1>
      </div>
    </motion.div>
  )
}
