import { motion } from "framer-motion";
import { Check, Crown, Sword, Shield } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Escudeiro",
    icon: Shield,
    price: "19",
    description: "Perfeito para iniciantes começando sua jornada",
    features: [
      "Guias básicos de estratégia",
      "Acesso ao fórum da comunidade",
      "Torneios semanais",
      "Análises básicas",
    ],
    color: "from-blue-500/20 via-purple-500/20 to-blue-500/20",
    colorHover: "from-regal/30 via-regal-gold/30 to-regal/30",
  },
  {
    name: "Cavaleiro",
    icon: Sword,
    price: "49",
    description: "Para jogadores dedicados que buscam maestria",
    features: [
      "Guias avançados de estratégia",
      "Entrada prioritária em torneios",
      "Painel de estatísticas pessoais",
      "Sessão de coaching individual",
      "Acesso premium ao discord",
    ],
    color: "from-purple-500/20 via-regal-gold/20 to-purple-500/20",
    colorHover: "from-regal-gold/30 via-orange-500/30 to-regal-gold/30",
    popular: true,
  },
  {
    name: "Rei",
    icon: Crown,
    price: "99",
    description: "Pacote definitivo para jogadores profissionais",
    features: [
      "Base de estratégias de elite",
      "Acesso VIP a torneios",
      "Suíte avançada de análises",
      "Sessões mensais de coaching",
      "Canal privado no discord",
      "Emblema de perfil personalizado",
    ],
    color: "from-regal-gold/20 via-orange-500/20 to-regal-gold/20",
    colorHover: "from-regal/30 via-regal-gold/30 to-regal/30",
  },
];

const Pricing = () => {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-black via-regal/90 to-black overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
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
              Escolha Seu Caminho
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-space max-w-2xl mx-auto">
            Selecione o plano perfeito para aprimorar sua jornada de jogo
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Cartão */}
              <div className="relative h-full p-8 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
                {/* Efeito de borda animada */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute inset-[1px] bg-black rounded-xl" />

                {/* Conteúdo */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} p-2.5`}
                    >
                      <plan.icon className="w-full h-full text-white" />
                    </motion.div>
                    {plan.popular && (
                      <span className="px-3 py-1 text-xs font-semibold text-regal-gold bg-regal-gold/10 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-cinzel font-bold mb-2 text-regal-cream">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">R${plan.price}</span>
                    <span className="text-gray-400">/mês</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-regal-gold" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full bg-gradient-to-r ${plan.colorHover} text-white hover:brightness-110 transition-all duration-300`}
                  >
                    Escolher {plan.name}
                  </Button>
                </div>
              </div>

              {/* Efeito de brilho ao passar o mouse */}
              <div
                className={`absolute -inset-[1px] bg-gradient-to-r ${plan.colorHover} rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-regal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-regal-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default Pricing;
