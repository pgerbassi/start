import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const depoimentos = [
  {
    id: 1,
    name: "Felipe",
    role: "Desafio de ser tornar hiperpoliglota em 1 ano",
    rating: 5,
    videoUrl: "0E5MqKoD0dA",
  },
  {
    id: 2,
    name: "Daniele",
    role: "Conquistou o certificado de proficiência em alemão em 1 mês",
    rating: 5,
    videoUrl: "1tjNbqwuAIc",
  },
  {
    id: 3,
    name: "Fluência em 2 meses em RUSSO",
    role: "João",
    rating: 5,
    videoUrl: "j7Qz9frfXPw",
  },
];

const Depoimentos = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-regal-gold/70 to-black overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent animate-pulse" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-6">
            <span className="bg-gradient-to-r from-regal-gold via-white to-regal-gold bg-clip-text text-transparent">
              Depoimentos de Alunos
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-space max-w-2xl mx-auto">
            Ouça os campeões da nossa comunidade
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {depoimentos.map((depoimento) => (
              <CarouselItem key={depoimento.id} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-4"
                >
                  <div className="relative group">
                    {/* Contêiner de Vídeo */}
                    <div className="aspect-video bg-black/80 rounded-xl overflow-hidden border border-regal-gold/30 relative group">
                      <iframe
                        src={`https://www.youtube.com/embed/${depoimento.videoUrl}?autoplay=0&modestbranding=1&rel=0`}
                        title={`Depoimento de ${depoimento.name}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full z-30 relative"
                      />
                      {/* Overlay para melhorar interatividade */}
                      <a 
                        href={`https://www.youtube.com/watch?v=${depoimento.videoUrl}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20 cursor-pointer group"
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                        bg-regal-gold/80 text-black px-4 py-2 rounded-full 
                                        opacity-0 group-hover:opacity-100 
                                        transition-all duration-300 
                                        flex items-center justify-center">
                          <span className="font-bold text-sm">Assistir</span>
                        </div>
                      </a>
                      {/* Efeito de brilho ao passar o mouse */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-regal-gold/20 to-regal-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                    </div>

                    {/* Informações do Depoimento */}
                    <div className="mt-4 text-center">
                      <h3 className="text-xl font-cinzel font-bold text-regal-cream">
                        {depoimento.name}
                      </h3>
                      <p className="text-sm text-gray-400 font-space mb-2">
                        {depoimento.role}
                      </p>
                      <div className="flex justify-center gap-1">
                        {[...Array(depoimento.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-regal-gold fill-regal-gold"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-black/50 border-regal-gold/30 hover:bg-black/80 hover:border-regal-gold">
            <ChevronLeft className="w-4 h-4 text-regal-gold" />
          </CarouselPrevious>
          <CarouselNext className="hidden md:flex -right-4 bg-black/50 border-regal-gold/30 hover:bg-black/80 hover:border-regal-gold">
            <ChevronRight className="w-4 h-4 text-regal-gold" />
          </CarouselNext>
        </Carousel>

        {/* Indicadores para dispositivos móveis */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {depoimentos.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-regal-gold/30"
            />
          ))}
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-regal-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-regal-gold/5 rounded-full blur-3xl" />
    </section>
  );
};

export default Depoimentos;
