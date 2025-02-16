"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Word {
  id: string
  text: string
  translation: string
  x: number
  y: number
}

const words = [
  { text: "Hello", translation: "Olá" },
  { text: "Amor", translation: "Amor" },
  { text: "Bonjour", translation: "Bom dia" },
  { text: "Freund", translation: "Amigo" },
  { text: "Ciao", translation: "Olá" },
  { text: "こんにちは", translation: "Olá" },
  { text: "你好", translation: "Olá" },
  { text: "Привет", translation: "Olá" },
]

const FallingWord = React.memo(
  ({
    word,
    isHovered,
    onMouseEnter,
    onMouseLeave,
  }: {
    word: Word
    isHovered: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
  }) => (
    <motion.div
      className="absolute text-white pointer-events-auto cursor-pointer text-shadow"
      style={{ left: `${word.x}%`, top: `${word.y}%` }}
      initial={{ opacity: 0, y: "-10%" }}
      animate={{ opacity: isHovered ? 1 : 0.9, y: `${word.y}%` }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.span
        animate={{ scale: isHovered ? 1.2 : 1 }}
        className="text-lg md:text-xl lg:text-2xl font-semibold px-2 py-1 rounded bg-black bg-opacity-50"
      >
        {isHovered ? word.translation : word.text}
      </motion.span>
    </motion.div>
  ),
)

FallingWord.displayName = "FallingWord"

export default function LanguageRain() {
  const [fallingWords, setFallingWords] = useState<Word[]>([])
  const [hoveredWord, setHoveredWord] = useState<string | null>(null)

  const addWord = useCallback(() => {
    const newWord: Word = {
      id: Math.random().toString(36).substr(2, 9),
      ...words[Math.floor(Math.random() * words.length)],
      x: Math.random() * 100,
      y: -10,
    }
    setFallingWords((prev) => [...prev, newWord])
  }, [])

  useEffect(() => {
    // Add initial words
    for (let i = 0; i < 15; i++) {
      addWord()
    }

    const interval = setInterval(addWord, 1500)
    return () => clearInterval(interval)
  }, [addWord])

  useEffect(() => {
    const interval = setInterval(() => {
      setFallingWords((prev) => prev.map((word) => ({ ...word, y: word.y + 0.5 })).filter((word) => word.y < 110))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const visibleWords = useMemo(() => {
    return fallingWords.filter((word) => word.y >= -10 && word.y <= 110)
  }, [fallingWords])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[100]">
      <AnimatePresence>
        {visibleWords.map((word) => (
          <FallingWord
            key={word.id}
            word={word}
            isHovered={hoveredWord === word.id}
            onMouseEnter={() => setHoveredWord(word.id)}
            onMouseLeave={() => setHoveredWord(null)}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
