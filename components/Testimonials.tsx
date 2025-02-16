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
    name: "Alex Silva",
    role: "Jogador Profissional",
    rating: 5,
    // videoUrl to be added later
  },
  {
    id: 2,
    name: "Sara Santos",
    role: "Campeã de Torneio",
    rating: 5,
    // videoUrl to be added later
  },
  {
    id: 3,
    name: "Miguel Oliveira",
    role: "Líder de Guilda",
    rating: 5,
    // videoUrl to be added later
  },
];

const Depoimentos = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-regal/20 to-black overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-regal-gold/5 to-transparent animate-pulse" />
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
              Depoimentos de Jogadores
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
                    <div className="aspect-video bg-black/80 rounded-xl overflow-hidden border border-regal-gold/30">
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-regal-gold/60 font-space text-sm">
                          Vídeo do YouTube em breve
                        </p>
                      </div>
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
