"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GamepadIcon, SparklesIcon, ZapIcon } from "lucide-react"

type Game = {
  name: string;
  description: string;
  icon: typeof GamepadIcon;
  color: string;
}

const games: Game[] = [
  { 
    name: "Frase Secreta", 
    description: "Arraste palavras para formar uma frase correta.",
    icon: SparklesIcon,
    color: "text-regal"
  },
  { 
    name: "Desafio Rápido", 
    description: "Traduza a palavra antes que o tempo expire.",
    icon: ZapIcon,
    color: "text-regal-dark"
  },
  { 
    name: "Desafio Dinâmico", 
    description: "Escolha a palavra correta antes que o tempo acabe.",
    icon: GamepadIcon,
    color: "text-regal-light"
  }
]

export default function MiniGames() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)
  const [score, setScore] = useState(0)

  const handleGameComplete = () => {
    setScore(score + 10)
  }

  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-cinzel text-center mb-16 medieval-glow text-regal-gold">
          Mini-Jogos
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => {
            const GameIcon = game.icon
            return (
              <motion.div
                key={index}
                className={`
                  bg-regal/20 
                  p-8 
                  rounded-xl 
                  border 
                  border-regal-gold/30 
                  hover:border-opacity-100
                  transition-all
                  duration-300
                  cursor-pointer
                `}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
                }}
                onClick={() => setSelectedGame(game)}
              >
                <div className="flex items-center mb-4">
                  <GameIcon 
                    className={`
                      w-10 
                      h-10 
                      mr-4 
                      ${game.color}
                    `} 
                  />
                  <h3 className="text-2xl font-medievaltech text-regal-gold">
                    {game.name}
                  </h3>
                </div>
                <p className="text-foreground font-space">
                  {game.description}
                </p>
              </motion.div>
            )
          })}
        </div>
        
        {selectedGame && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="bg-regal-dark/20 p-8 rounded-xl border border-regal-gold/30"
            >
              <h3 className="text-2xl font-medievaltech mb-4 text-regal-gold">
                {selectedGame.name}
              </h3>
              <p className="mb-4 text-foreground font-space">
                Interface do jogo seria exibida aqui.
              </p>
              <button 
                className="medieval-btn"
                onClick={handleGameComplete}
              >
                Completar Jogo
              </button>
            </motion.div>
          </AnimatePresence>
        )}
        
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-xl font-space">
            Pontuação Atual: {score} pontos
          </p>
        </motion.div>
      </div>
    </section>
  )
}
