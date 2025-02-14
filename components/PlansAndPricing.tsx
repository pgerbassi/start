import { motion } from "framer-motion"
import { CheckIcon } from "lucide-react"

const plans = [
  {
    name: "Explorador",
    features: ["2 aulas/semana", "Jogos básicos", "Acesso à comunidade"],
    price: "R$99,99",
    color: "border-regal-blue",
    textColor: "text-regal-blue",
  },
  {
    name: "Competidor",
    features: ["4 aulas/semana", "Desafios avançados", "Coaching personalizado"],
    price: "R$199,99",
    color: "border-regal-purple",
    textColor: "text-regal-purple",
  },
  {
    name: "Lendário",
    features: ["Aulas diárias", "Bônus exclusivos", "Ranking VIP", "Suporte prioritário"],
    price: "R$399,99",
    color: "border-regal-gold",
    textColor: "text-regal-gold",
  },
]

export default function PlansAndPricing() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-cinzel text-center mb-16 medieval-glow text-regal-gold">
          Planos & Preços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`
                bg-regal/20 
                p-8 
                rounded-xl 
                border 
                ${plan.color}
                hover:border-opacity-100
                transition-all
                duration-300
              `}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
              }}
            >
              <h3 className={`text-3xl font-medievaltech mb-6 ${plan.textColor}`}>
                {plan.name}
              </h3>
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-center text-foreground font-space"
                  >
                    <CheckIcon 
                      className={`mr-2 w-5 h-5 ${plan.textColor}`} 
                      strokeWidth={2} 
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className={`text-4xl font-medievaltech mb-6 ${plan.textColor}`}>
                {plan.price}
                <span className="text-base ml-1">/ mês</span>
              </p>
              <button 
                className="medieval-btn w-full"
                aria-label={`Assinar plano ${plan.name}`}
              >
                Escolher Plano
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
