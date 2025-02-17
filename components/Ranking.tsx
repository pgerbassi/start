import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import AnimatedButton from "./ui/animated-button";

interface RankTier {
  name: string;
  range: string;
  color: string;
  image: string;
  description: string;
  borderColor: string;
  bgFrom: string;
  bgTo: string;
}

const ranks: RankTier[] = [
  {
    name: "Bronze",
    range: "0 - 500",
    color: "text-[#CD7F32]",
    image: "/rankings/bronze.png",
    description: "Início da jornada",
    borderColor: "border-[#CD7F32]",
    bgFrom: "from-[#CD7F32]",
    bgTo: "to-[#8B4513]"
  },
  {
    name: "Prata",
    range: "501 - 1000",
    color: "text-gray-400",
    image: "/rankings/prata.png",
    description: "Guerreiro em ascensão",
    borderColor: "border-gray-400",
    bgFrom: "from-gray-400",
    bgTo: "to-gray-600"
  },
  {
    name: "Ouro",
    range: "1001 - 1500",
    color: "text-yellow-500",
    image: "/rankings/ouro.png",
    description: "Campeão experiente",
    borderColor: "border-yellow-500",
    bgFrom: "from-yellow-500",
    bgTo: "to-yellow-700"
  },
  {
    name: "Platina",
    range: "1501 - 2000",
    color: "text-cyan-400",
    image: "/rankings/platina.png",
    description: "Competidor de elite",
    borderColor: "border-cyan-400",
    bgFrom: "from-cyan-400",
    bgTo: "to-cyan-600"
  },
  {
    name: "Diamante",
    range: "2001 - 2225",
    color: "text-blue-400",
    image: "/rankings/diamante.png",
    description: "Perfeição de diamante",
    borderColor: "border-blue-400",
    bgFrom: "from-blue-400",
    bgTo: "to-blue-600"
  },
  {
    name: "Mestre",
    range: "2226 - 2500",
    color: "text-purple-500",
    image: "/rankings/mestre.png",
    description: "Estrategista magistral",
    borderColor: "border-purple-500",
    bgFrom: "from-purple-500",
    bgTo: "to-purple-700"
  },
  {
    name: "Lendário",
    range: "2501 - 3000",
    color: "text-red-500",
    image: "/rankings/lendario.png",
    description: "Guerreiro lendário",
    borderColor: "border-red-500",
    bgFrom: "from-red-500",
    bgTo: "to-red-700"
  }
];

const Ranking = () => {
  const [selectedRank, setSelectedRank] = useState<RankTier | null>(null);

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-black via-black/80 to-black overflow-hidden">
      {/* Padrão de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtOXY5aDl6IiBzdHJva2U9IiM4QjAwMDAiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0yNyAyN2gtOXY5aDl6IiBzdHJva2U9IiM4QjAwMDAiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjwvZz48L3N2Zz4=')] animate-[pattern_20s_linear_infinite]" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-6">
            <span className="bg-gradient-to-r from-regal-gold via-white to-regal-gold bg-clip-text text-transparent">
              Patamares de Glória
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-space max-w-2xl mx-auto mb-12">
            Selecione um patamar para ver seus detalhes e requisitos
          </p>

          {/* Botões de Seleção de Patamar */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {ranks.map((rank) => (
              <motion.button
                key={rank.name}
                onClick={() => setSelectedRank(selectedRank?.name === rank.name ? null : rank)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group p-4 rounded-full ${
                  selectedRank?.name === rank.name ? 'ring-2' : ''
                } ${rank.borderColor}`}
              >
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  ${selectedRank?.name === rank.name ? `${rank.bgFrom} bg-gradient-to-br ${rank.bgTo}` : 'bg-black/50'}
                  backdrop-blur-sm border ${rank.borderColor} transition-all duration-300
                  group-hover:border-opacity-100 border-opacity-50
                `}>
                  <Image 
                    src={rank.image} 
                    alt={`${rank.name} Rank`} 
                    width={80} 
                    height={80} 
                    className="w-10/12 h-10/12 object-contain"
                  />
                </div>
                <div className={`
                  absolute -inset-0.5 rounded-full opacity-0 
                  group-hover:opacity-20 transition duration-300
                  bg-gradient-to-r ${rank.bgFrom} ${rank.bgTo} blur
                `} />
              </motion.button>
            ))}
          </div>

          {/* Detalhes do Patamar */}
          <AnimatePresence mode="wait">
            {selectedRank && (
              <motion.div
                key={selectedRank.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`
                  relative max-w-md mx-auto rounded-xl overflow-hidden
                  border ${selectedRank.borderColor} bg-black/50 backdrop-blur-sm p-6
                `}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedRank.bgFrom} ${selectedRank.bgTo} opacity-5`} />
                
                <div className="relative z-10">
                  <h3 className={`text-2xl font-cinzel font-bold mb-2 ${selectedRank.color}`}>
                    {selectedRank.name}
                  </h3>
                  
                  <p className="text-gray-300 font-space text-lg mb-4">
                    {selectedRank.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-black/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-2">Faixa de Pontos</p>
                      <p className={`font-mono text-xl ${selectedRank.color}`}>
                        {selectedRank.range}
                      </p>
                    </div>
                    
                    <div className="bg-black/30 rounded-lg p-4">
                      <p className="text-sm text-gray-400 mb-2">Requisitos</p>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-center gap-2">
                          <div className={`w-1 h-1 rounded-full ${selectedRank.color}`} />
                          Mínimo de {selectedRank.range.split(" - ")[0]} pontos
                        </li>
                        <li className="flex items-center gap-2">
                          <div className={`w-1 h-1 rounded-full ${selectedRank.color}`} />
                          Completar conquistas específicas
                        </li>
                        <li className="flex items-center gap-2">
                          <div className={`w-1 h-1 rounded-full ${selectedRank.color}`} />
                          Manter desempenho consistente
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-800/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 text-center justify-center items-center content-center ">
      <AnimatedButton className="bg-gradient-to-r from-regal-gold/70 via-regal/50 to-regal-gold/70"
        onClick={(e) => {
          e.stopPropagation();
          console.log("Animated button clicked!");
        }}
      />
      </div>
    </section>
  );
};

export default Ranking;
