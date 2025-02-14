import { motion } from "framer-motion"
import { Trophy, Crown, Star } from "lucide-react"
import Image from 'next/image'

const topPlayers = [
  { name: "João Silva", points: 1500, rank: 2, icon: Star, avatar: "/avatars/avatar1.png", badge: "Mestre Medieval" },
  { name: "Maria Santos", points: 1400, rank: 1, icon: Crown, avatar: "/avatars/avatar2.png", badge: "Campeão Tecnológico" },
  { name: "Pedro Oliveira", points: 1300, rank: 3, icon: Trophy, avatar: "/avatars/avatar3.png", badge: "Aprendiz Lendário" },
  { name: "Ana Costa", points: 1200, rank: 4, avatar: "/avatars/avatar4.png", badge: "Guerreiro do Conhecimento" },
  { name: "Carlos Alberto", points: 1100, rank: 5, avatar: "/avatars/avatar5.png", badge: "Mestre do Conhecimento" },
]

export default function MonthlyRanking() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-cinzel text-center mb-16 medieval-glow text-regal-gold">
          Ranking Mensal
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {topPlayers.slice(0, 3).map((player, index) => {
            const PlayerIcon = player.icon || Star
            return (
              <motion.div
                key={index}
                className={`
                  p-8 
                  rounded-xl 
                  border 
                  border-regal-gold/30 
                  bg-regal/20 
                  medieval-glow
                  ${index === 1 ? 'transform scale-110 z-10' : ''}
                `}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Image 
                      src={player.avatar} 
                      alt={`Avatar de ${player.name}`} 
                      width={64} 
                      height={64} 
                      className={`
                        rounded-full 
                        w-16 
                        h-16 
                        mr-4 
                        ${index === 0 ? 'text-regal-gold' : 
                          index === 1 ? 'text-regal' : 
                          'text-regal-dark'}
                      `} 
                    />
                    <h3 className="text-2xl font-medievaltech font-bold text-regal-gold">
                      {`#${player.rank} ${player.name}`}
                    </h3>
                  </div>
                </div>
                <p className="text-foreground font-space text-lg">
                  {player.badge}
                </p>
                <p className="text-foreground font-space text-lg">
                  {`${player.points} pontos`}
                </p>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div
          className={`
            bg-regal/20 
            p-8 
            rounded-xl 
            border 
            border-regal-gold/30 
            medieval-glow
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-medievaltech mb-6 text-regal-gold">
            Tabela de Classificação Completa
          </h3>
          <ul>
            {topPlayers.map((player, index) => (
              <motion.li
                key={index}
                className={`
                  flex 
                  justify-between 
                  items-center 
                  py-4 
                  border-b 
                  border-regal-gold/20 
                  last:border-b-0
                  font-space
                  hover:bg-regal/10
                  transition-colors
                  duration-300
                `}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-foreground">{`#${player.rank} ${player.name}`}</span>
                <span className="text-regal-gold font-bold">{`${player.points} pontos`}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <div className="text-center mt-12">
          <button 
            className="tech-btn px-10 py-4 text-lg font-semibold"
          >
            Junte-se ao Ranking Lendário
          </button>
        </div>
      </div>
    </section>
  )
}
