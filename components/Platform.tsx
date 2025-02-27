import { motion } from "framer-motion";
import { Gamepad2, Rocket, Trophy, Users } from "lucide-react";
import AnimatedButton from "./ui/animated-button";

const features = [
  {
    icon: Gamepad2,
    title: "Jogabilidade Imersiva",
    description: "Experimente o Sistema de Ranks como nunca antes, com Mecânicas de Jogo de Ponta."
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Junte-se a milhares de jogadores em batalhas épicas e forme alianças duradouras."
  },
  {
    icon: Trophy,
    title: "Ligas Competitivas",
    description: "Suba nas classificações e compita em torneios prestigiosos."
  },
  {
    icon: Rocket,
    title: "Atualizações Constantes",
    description: "Evolução contínua com novos recursos, eventos e desafios."
  }
];

const Platform = () => {
  return (
    <section className="relative md:min-h-screen pt-14 pb-2 md:py-20 lg:py-20 bg-gradient-to-br from-black via-regal-gold/5 to-black overflow-hidden">
      {/* Efeito de fundo animado */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-regal/10 via-regal/20 to-transparent animate-pulse" />
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
            Explore a Arena
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-space max-w-2xl mx-auto mb-12">
          Entenda como ganhar Pontos e subir no Rank
          </p>

          {/* Espaço reservado para vídeo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto mb-20 rounded-xl overflow-hidden border border-regal-gold/30 bg-black/50"
          >
            <div className="aspect-video bg-black/80 flex items-center justify-center">
            <div className="relative z-10 w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/z48BonBn0Yk?autoplay=0&modestbranding=1&rel=0"
                title="Language Arena Presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            </div>
            {/* Efeito de brilho */}
            <div className="absolute -inset-2 bg-regal-gold/20 blur-xl opacity-50" />
          </motion.div>
          <a href="https://pay.hotmart.com/F98257568Y?off=l6vc739h&bid=1740409540686" target="_blank" rel="noopener noreferrer">
          <AnimatedButton
            onClick={(e) => {
              e.stopPropagation();
              console.log("Animated button clicked!");
            }}
          />
          </a>
          {/* Grade de Recursos */}
          {/*
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-regal-gold/20 overflow-hidden">
                  {/* Efeito de hover 
                  <div className="absolute inset-0 bg-gradient-to-b from-regal-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-4 mx-auto rounded-lg bg-regal-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-regal-gold" />
                    </div>
                    
                    <h3 className="text-xl font-cinzel font-bold mb-2 text-regal-cream">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 font-space text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-regal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-regal-gold/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Platform;
