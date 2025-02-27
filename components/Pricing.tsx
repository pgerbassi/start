import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Crown, Sword, Shield } from "lucide-react";
import  AnimatedButton2  from "./ui/animated-button-2";
import  AnimatedButton  from "./ui/animated-button";

const plans = [
  {
    name: "Cavaleiro",
    icon: Sword,
    price: "197,90",
    description: "Plano Mensal - Domine a Arena com Estratégias Exclusivas",
    originalPrice: "R$ 197,90",
    discountedPrice: null,
    discountText: null,
    features: [
      "Guias avançados de estratégia",
      "Acesso premium ao discord",
    ],
    color: "from-purple-500/20 via-regal-gold/20 to-purple-500/20",
    colorHover: "from-regal-gold/30 via-orange-500/30 to-regal-gold/30",
    popular: true,
    link: "https://pay.hotmart.com/F98257568Y?off=l6vc739h&bid=1740409540686",
  },
];

const Pricing = () => {
  return (
    <section className="relative md:min-h-screen py-20 bg-gradient-to-br from-black via-regal/90 to-black overflow-hidden">
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
            Junte-se à Turma
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-space max-w-2xl mx-auto">
          Entre na Arena e se torne Campeão
          </p>
        </motion.div>

        <div className="grid gap-24 md:gap-10 lg:gap-10 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 max-w-7xl mx-auto justify-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group max-w-md mx-auto w-full"
            >
              {/* Cartão */}
              <div className="relative h-full p-8 -mb-2 pb-10 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
                {/* Efeito de borda animada */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="absolute inset-[1px] bg-black rounded-xl" />

                {/* Conteúdo */}
                <div className="relative">
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
                    {plan.discountText && (
                      <div className="text-regal-gold font-bold text-3xl mt-2 bg-black/70 p-0 rounded">
                        {plan.discountText}
                      </div>
                    )}
                    {plan.originalPrice && plan.discountedPrice && (
                      <div className="text-gray-400 text-sm mt-1">
                        <span className="line-through mr-2">{plan.originalPrice}</span>
                        <span className="text-regal-gold">{plan.discountedPrice}</span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-regal-gold" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
              <div className=" absolute w-full z-50 -pt-0">
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  <AnimatedButton
                    text={`Escolher ${plan.name}`}
                    className={`w-full relative z-50 cursor-pointer pointer-events-auto bg-gradient-to-r ${plan.colorHover} text-white hover:brightness-110 transition-all duration-300`}
                  />
                  </a>
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
