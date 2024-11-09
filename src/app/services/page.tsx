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
  const [mousePosition, setMousePosition] = useState({ x: -500, y: +50 })
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const [isHovering, setIsHovering] = useState(false)
  const controls = useAnimation()

  const cursorSize = useMotionValue(50)
  const cursorScale = useTransform(cursorSize, [40, 400], [1, 10])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: -e.clientX, y: -e.clientY })
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

//   useEffect(() => {
//     controls.start({
//       background: [
//         'linear-gradient(45deg, #ff00ff, #00ffff)',
//         'linear-gradient(45deg, #ffff00, #ff00ff)',
//         'linear-gradient(45deg, #00ffff, #ffff00)',
//       ],
//       transition: { duration: 10, repeat: Infinity, repeatType: 'reverse' }
//     })
//   }, [controls])

  return (
    <motion.div 
      className="relative w-full h-screen overflow-hidden"
      animate={controls}
    >
           <motion.div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 p-8"
          animate={{
               x: (mousePosition.x ) / window.innerWidth+0.5,
              y: (mousePosition.y) / window.innerHeight+0.5,
              transition: { duration: 0.5 }
          }}
           >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`relative rounded-lg  overflow-hidden pt-${(index % 2 ==0 ? 2:1) * 4} pr-${(index % 2 ==0 ? 2:1) * 4}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              translateX: (mousePosition.x  * 10 / window.innerWidth  + index) * 30,
              translateY: (mousePosition.y * 10 / window.innerHeight   + index) * 15

            // x: (mousePosition.x * 10 / window.innerWidth + 1) * 50,
            //   y: (mousePosition.y * 10 / window.innerHeight + 1) * 50

            //   x: (mousePosition.x * (index % 2 ? 20 : -20)) / window.innerWidth,
            //   y: (mousePosition.y * (index % 2 ? 20 : -20)) / window.innerHeight,
           
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 30,
              mass: 0.5,
            }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => {
              setIsHovering(true)
              cursorSize.set(400)
            }}
            onHoverEnd={() => {
              setIsHovering(false)
              cursorSize.set(40)
            }}
          >
            <motion.img
              src={src}
              alt={`Background Image ${index + 1}`}
              className={``}
              initial={{ scale: 1.2 }}
              animate={{ 
                scale: 1 + (Math.abs(mousePosition.x / window.innerWidth - 0.5) *index + 
                            Math.abs(mousePosition.y / window.innerHeight - 0.5)) * 0.2,
                            transition: { duration: 0.5 },
                            x: (mousePosition.x   / window.innerWidth  ) * 10,
                            y: (mousePosition.y  / window.innerHeight ) * 10
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 mix-blend-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 0.6 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
      {/* <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" /> */}
      {/* <motion.div
        ref={cursorRef}
        className="absolute bg-white rounded-full mix-blend-difference pointer-events-none"
        style={{ 
          x: cursorX, 
          y: cursorY, 
          width: cursorSize, 
          height: cursorSize,
          scale: cursorScale
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      /> */}
      {/* {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-white rounded-full pointer-events-none"
          style={{
            x: cursorX,
            y: cursorY,
          }}
          animate={{
            x: cursorX.get() + (Math.random() - 0.5) * 200,
            y: cursorY.get() + (Math.random() - 0.5) * 200,
            opacity: [1, 0],
            scale: [0, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'loop',
            delay: index * 0.1,
          }}
        />
      ))} */}
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