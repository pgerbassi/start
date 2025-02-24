import { motion } from "framer-motion";
import { CircuitBoard, LandPlot, Database, ChevronsUp, Workflow } from "lucide-react";

const methods = [
  {
    icon: LandPlot,
    title: "Método Arena",
    description: "No Método Arena, conforme os jogadores avançam nas classificações e alcançam ranks mais altos, eles ganharão prêmios valiosos, como dinheiro e viagens.",
    color: "from-regal-500 to-regal-700"
  },
  {
    icon: CircuitBoard,
    title: "Método DualFlow",
    description: "O Método DualFlow é uma abordagem inovadora para o aprendizado de idiomas, que integra a inteligência artificial para oferecer uma experiência personalizada e altamente eficaz.",
    color: "from-regal-700 to-regal-900"
  },
  {
    icon: ChevronsUp,
    title: "Método Boost",
    description: "O Método Boost é uma técnica de aprendizado que utiliza planilhas para aplicar a estratégia de repetição espaçada, um método comprovado para melhorar a retenção de informações ao longo do tempo.",
    color: "from-regal-900 to-regal-gold/50"
  },
];

const Methods = () => {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-black via-regal-900/50 to-black overflow-hidden">
      {/* Padrões de fundo animados */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,0,0,0.1),rgba(0,0,0,0))]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtOXY5aDl6IiBzdHJva2U9IiM4QjAwMDAiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0yNyAyN2gtOXY5aDl6IiBzdHJva2U9IiM4QjAwMDAiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjwvZz48L3N2Zz4=')]"
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
              Nossos Métodos
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-space max-w-2xl mx-auto">
          Descubra como combinamos Aprendizado de Idiomas  com Sistema de Prêmios
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {methods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-regal-900 overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 mb-4 rounded-lg bg-regal-900/10 flex items-center justify-center"
                  >
                    <method.icon className="w-6 h-6 text-regal-gold" />
                  </motion.div>

                  <h3 className="text-xl font-cinzel font-bold mb-3 text-regal-cream group-hover:text-regal-gold transition-colors">
                    {method.title}
                  </h3>

                  <p className="text-gray-400 font-space text-sm leading-relaxed">
                    {method.description}
                  </p>

                  {/* Animated line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-regal-gold/50 to-transparent"
                  />
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-regal-gold/20 to-regal-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
            </motion.div>
          ))}
        </div>
        <div className="text-6xl font-bold text-center text-regal-gold mt-4 glow-effect">
          <div className="pt-10">
          +3
          </div>

        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-regal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-regal-700/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Methods;
