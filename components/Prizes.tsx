import { motion } from "framer-motion";
import { Trophy, Medal, Crown, Award } from "lucide-react";
import AnimatedButton from "./ui/animated-button";

const prizes = [
  {
    type: "Semestral",
    icon: Award,
    title: "Conquista Semestral",
    description: "Prêmios exclusivos para os melhores desempenhos do semestre",
    rewards: [
      "R$ ---,-- em dinheiro",
      "Prêmios Mensal",
      "Prêmios Semestral",
      "+"
    ],
    color: "from-blue-500/20 via-purple-500/20 to-blue-500/20",
    colorHover: "from-black/50 via-black/30 to-black/50",
    isActive: false
  },
  {
    type: "Mensal - Março 2025",
    icon: Medal,
    title: "Conquista Mensal",
    description: "Prêmios exclusivos para os melhores desempenhos do mês",
    rewards: [
      "1º - R$ 1000,00",
      "2º - R$ 500,00",
      "3º - R$ 250,00",
    ],
    color: "from-blue-500/20 via-purple-500/20 to-blue-500/20",
    colorHover: "from-blue-500/30 via-purple-500/30 to-blue-500/30",
    isActive: true
  },
  {
    type: "Anual",
    icon: Crown,
    title: "Conquista Anual",
    description: "Prêmios exclusivos para os melhores desempenhos do ano",
    rewards: [
      "R$ ----,-- em dinheiro",
      "Prêmios Mensal",
      "Prêmios Semestral",
      "+"
    ],
    color: "from-regal-gold/10 via-orange-500/10 to-regal-gold/10",
    colorHover: "from-black/50 via-black/30 to-black/50",
    isActive: false
  }
];

const Prizes = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-regal/80 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtOXY5aDl6IiBzdHJva2U9IiNGRkQ3MDAiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0yNyAyN3gtOXY5aDl6IiBzdHJva2U9IiNGRkQ3MDAiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjwvZz48L3N2Zz4=')]"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-6">
            <span className="bg-gradient-to-r from-regal-gold via-white to-regal-gold bg-clip-text text-transparent">
              Recompensas de Campeão
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-space max-w-2xl mx-auto">
            Conquiste glória e recompensas em sua jornada para a grandeza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center max-w-7xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.type}
              initial={{ opacity: 0, y: 20, scale: prize.isActive ? 1 : 0.75 }}
              whileInView={{ opacity: 1, y: 0, scale: prize.isActive ? 1 : 0.75 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className={`
                relative group w-full 
                ${prize.isActive 
                  ? 'z-20 shadow-2xl block' 
                  : 'hidden md:block opacity-50 z-10 shadow-lg cursor-not-allowed'}
              `}
            >
                {/* Card */}
                <div className="relative h-full p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
                  {/* Animated border effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${prize.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-[1px] bg-black rounded-xl" />
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-regal-gold font-cinzel text-sm">
                        {prize.type}
                      </span>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${prize.color} p-2`}
                      >
                        <prize.icon className="w-full h-full text-white" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-cinzel font-bold mb-2 text-regal-cream">
                      {prize.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{prize.description}</p>

                    <ul className="space-y-2">
                      {prize.rewards.map((reward, i) => (
                        <motion.li
                          key={reward}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-sm text-gray-300 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-regal-gold" />
                          {reward}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Blocked Overlay */}
                  {!prize.isActive && (
                    <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
                      <div className="text-center">
                        <span className="text-3xl font-cinzel font-bold text-white opacity-100 drop-shadow-lg">
                          Em Breve
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover glow effect */}
                <div
                  className={`absolute -inset-[1px] bg-gradient-to-r ${prize.colorHover} rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                />
              </motion.div>
            ))}
        </div>
        <div className="flex justify-center items-center pt-10">
        <AnimatedButton className=""
        onClick={(e) => {
          e.stopPropagation();
          console.log("Animated button clicked!");
        }}
      />
      </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-regal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Prizes;
