import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, GamepadIcon, Trophy } from "lucide-react"

const steps = [
  {
    title: "Aulas Imersivas ao Vivo",
    description: "Pratique conversação com falantes nativos em um reino medieval-tecnológico.",
    icon: BookOpen,
    color: "text-regal-gold"
  },
  {
    title: "Mini-Jogos Desafiadores",
    description: "Teste seu conhecimento através de missões épicas e desafios tecnológicos.",
    icon: GamepadIcon,
    color: "text-regal"
  },
  {
    title: "Ranking Mensal",
    description: "Escale a tabela de classificação, ganhe recompensas lendárias e prove sua maestria.",
    icon: Trophy,
    color: "text-regal-light"
  }
]

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      ref={ref} 
      className="py-20 bg-background text-foreground"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-cinzel text-center mb-16 medieval-glow text-regal-gold">
          Como Funciona?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                className={`
                  bg-regal/20 
                  p-8 
                  rounded-xl 
                  border 
                  border-regal-gold/30 
                  hover:border-regal-gold/50 
                  transition-all 
                  duration-300 
                  group
                  medieval-glow
                `}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <IconComponent 
                    className={`
                      w-12 
                      h-12 
                      mr-4 
                      ${step.color} 
                      group-hover:scale-110 
                      transition-transform 
                      duration-300
                    `} 
                  />
                  <h3 className="text-2xl font-medievaltech font-bold text-regal-gold">
                    {step.title}
                  </h3>
                </div>
                <p className="text-foreground font-space leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
