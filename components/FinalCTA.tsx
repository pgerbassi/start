import { motion } from "framer-motion"
import { ArrowRightIcon } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="relative py-20 bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-cinzel mb-6 medieval-glow text-regal-gold">
            Sua Jornada de Aprendizado Começa Agora
          </h2>
          <p className="text-xl font-space mb-10 text-foreground">
            Transforme seu domínio do idioma em uma aventura épica. Aprenda, jogue e conquiste novos horizontes linguísticos.
          </p>
          <div className="flex justify-center space-x-6">
            <button 
              className="medieval-btn text-xl px-10 py-4"
              aria-label="Começar Jornada de Aprendizado"
            >
              Iniciar Aventura
            </button>
            <button 
              className="tech-btn text-xl px-10 py-4"
              aria-label="Ver Planos"
            >
              Explorar Planos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
