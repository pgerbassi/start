"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import HeroMain from "./HeroMain";

interface HeroProps {
  onGateOpen: () => void
}

export default function Hero({ onGateOpen }: HeroProps) {
  const [isGateClicked, setIsGateClicked] = useState(false)
  const [showContent, setShowContent] = useState(false)

  const handleGateClick = () => {
    setIsGateClicked(true)
    setTimeout(() => setShowContent(true), 2000)
    setTimeout(onGateOpen, 3500)
  }

  useEffect(() => {
    if (isGateClicked) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isGateClicked])

  return (
    <motion.div
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-900"
      initial={{ background: "radial-gradient(circle, #1a1a1a 0%, #000000 100%)" }}
      animate={isGateClicked ? { background: "radial-gradient(circle, #2a2a2a 0%, #000000 100%)" } : {}}
      transition={{ duration: 2 }}
    >
      <AnimatePresence>
        {!isGateClicked && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col items-center mt-10">
              <motion.div
                className="group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { 
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGateClick}
              >
                <Image 
                  src="/logo.png" 
                  alt="Language Arena Logo" 
                  width={250} 
                  height={250} 
                  className="transition-all duration-300 
                             group-hover:shadow-medieval 
                             group-hover:brightness-110 
                             rounded-full"
                />
                <div className="absolute inset-0 bg-regal-gold/20 
                                opacity-0 group-hover:opacity-30 
                                rounded-full 
                                transition-opacity duration-300 
                                pointer-events-none"></div>
              </motion.div>
              
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-sm font-space 
                                 bg-regal/20 text-regal-gold 
                                 px-4 py-2 
                                 rounded-full 
                                 backdrop-blur-sm 
                                 border border-regal-gold/30">
                  A chave para dominar idiomas está aqui.
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full h-screen flex items-center justify-center">
        <motion.div
          className="absolute left-0 w-1/2 h-screen"
          animate={isGateClicked ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 2, ease: [0.9, 0.0, 0.2, 1] }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/door-left-WthIvAKbFy5bQXrYdrd7S1Tu7XMpXO.png"
            alt="Left Door"
            fill
            className="object-cover object-right"
            priority
          />
        </motion.div>

        <motion.div
          className="absolute right-0 w-1/2 h-screen"
          animate={isGateClicked ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 2, ease: [0.9, 0.0, 0.2, 1] }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/door-right-Aym9BG8R9oxnuqfDhj8W9wgV0k4WKf.png"
            alt="Right Door"
            fill
            className="object-cover object-left"
            priority
          />
        </motion.div>

        <AnimatePresence>
          {!isGateClicked && (
            <motion.button
              className="absolute z-20 w-48 h-48 rounded-full bg-transparent text-white font-bold text-lg cursor-pointer overflow-visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={handleGateClick}
            >
              <div className="relative w-full h-full">
                {/* Shimmering background */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0) 70%)",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Radiant border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "2px solid rgba(255,215,0,0.5)",
                    boxShadow: "0 0 20px rgba(255,215,0,0.5), inset 0 0 20px rgba(255,215,0,0.5)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,215,0,0.5), inset 0 0 20px rgba(255,215,0,0.5)",
                      "0 0 40px rgba(255,215,0,0.7), inset 0 0 40px rgba(255,215,0,0.7)",
                      "0 0 20px rgba(255,215,0,0.5), inset 0 0 20px rgba(255,215,0,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Wave effect */}
                {[...Array(3)].map((_, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: "2px solid rgba(255,215,0,0.3)",
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  />
                ))}

                {/* Inner content */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full opacity-10">
                  <span className="relative z-10 text-white text-2xl font-bold text-shadow">Click to enter</span>
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {isGateClicked && <VerticalLight />}

        <AnimatePresence>
          {showContent && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

function VerticalLight() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="relative bg-white"
        initial={{ height: 0, width: "1px", opacity: 1 }}
        animate={{
          height: ["0vh", "150vh", "150vh"],
          width: ["1px", "2px", "100vw"],
          opacity: [1, 1, 0.95],
        }}
        transition={{
          duration: 2.0,
          times: [0, 0.3, 1],
          ease: [0.4, 0.0, 0.2, 1],
        }}
        style={{
          boxShadow:
            "0 0 50px 20px rgba(255, 255, 255, 0.9), 0 0 100px 40px rgba(255, 255, 255, 0.6), 0 0 150px 80px rgba(255, 255, 255, 0.3)",
        }}
      />
    </motion.div>
  )
}
