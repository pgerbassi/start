import { Shield, Sword } from "lucide-react";
import { useEffect, useState, useCallback, type FC } from "react";
import AnimatedButton from "./ui/animated-button";
import Image from "next/image";

interface HeroMainProps {
  /**
   * A URL da imagem de fundo
   * @default "/coliseum-1.png"
   */
  backgroundImage?: string;
  /**
   * A palavra a ser revelada na animação
   * @default "LEGENDÁRIO"
   */
  revealWord?: string;
  /**
   * Classes CSS personalizadas para o contêiner
   */
  className?: string;
}

const HeroMain: FC<HeroMainProps> = ({
  backgroundImage = "/coliseum-1.png",
  revealWord = "LEGENDÁRIO",
  className = "",
}) => {
  const [wordDisplay, setWordDisplay] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const revealNextLetter = useCallback(() => {
    if (currentIndex < revealWord.length && !isAnimating) {
      setIsAnimating(true);
      setWordDisplay(prev => {
        const newDisplay = [...prev];
        newDisplay[currentIndex] = revealWord[currentIndex];
        return newDisplay;
      });
      setCurrentIndex(prev => prev + 1);

      // Se essa foi a última letra, reinicie após um atraso
      if (currentIndex === revealWord.length - 1) {
        setTimeout(() => {
          setCurrentIndex(0);
          setWordDisplay(new Array(revealWord.length).fill("_"));
          setIsAnimating(false);
        }, 2000);
      } else {
        setIsAnimating(false);
      }
    }
  }, [currentIndex, revealWord, isAnimating]);

  useEffect(() => {
    // Inicialize com sublinhados
    setWordDisplay(new Array(revealWord.length).fill("_"));
  }, [revealWord]);

  const handleHeroClick = () => {
    revealNextLetter();
  };

  return (
    <div 
      className={`relative min-h-screen w-full overflow-hidden 
                  bg-gradient-to-br from-background via-regal to-background 
                  cursor-pointer  ${className}`}
      onClick={handleHeroClick}
    >
      {/* New Header Section */}
      {/*<header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center px-4 md:px-8 py-4">
        <div className="flex items-center">
          <h1 className="font-cinzel text-sm md:text-xl font-bold text-regal-gold 
                         tracking-wider 
                         drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-opacity-50">
            Language Arena
          </h1>*
                    <Image 
            src="/logo-ofc.png" 
            alt="Language Arena Logo" 
            width={80} 
            height={80} 
            className="transition-transform duration-300 opacity-50 hover:scale-110 "
          />
        </div>*/}
        {/*<div className="flex items-center rounded-full w-[130px] h-[130px]">
          <Image 
            src="/logo1.png" 
            alt="Language Arena Logo" 
            width={150} 
            height={150} 
            className="transition-transform rounded-full duration-300 opacity-50 hover:scale-110 "
          />
        </div>
      </header>*/}

      {/* Existing background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-opacity-0 opacity-10 animate-glow-pulse"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Regal color overlay */}
        <div className="absolute inset-0 bg-regal opacity-90 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply"></div>
      </div>
      
      {/* Existing content - adjust top margin to account for header */}
      <div className="relative container mx-auto px-4 py-12 md:py-0
                      flex flex-col md:flex-row items-center justify-between min-h-screen mt-8">
        <div className="text-center md:text-left space-y-8 max-w-2xl w-full md:w-1/2">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-block">
              <span className="inline-block px-4 py-1.5 rounded-full 
                               text-xs md:text-sm font-medievaltech font-medium 
                               bg-regal/20 text-regal-gold 
                               backdrop-blur-sm border border-regal-gold/30 
                               animate-medieval-shimmer">
                Bem-vindo à Arena
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl 
                           font-cinzel font-bold text-foreground 
                           ">
              {/*<span className="block bg-gradient-to-r from-regal-gold via-white to-regal-gold 
                               bg-clip-text text-transparent">
                Language Arena
              </span>*/}
                      <div className="flex items-center content-center justify-center">
          <Image 
            src="/logo-ofc.png" 
            alt="Language Arena Logo" 
            width={450} 
            height={400} 
            className="transition-transform w-[60vw] h-[10vh] md:w-[25vw] md:h-[20vh] duration-300 opacity-95 hover:scale-110 mb-8"
          />
        </div>
              <span className="block mt-2 text-2xl bg-gradient-to-r from-regal-gold via-white to-regal-gold bg-clip-text text-transparent">
              Seu esforço vale dinheiro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 
                          font-space max-w-2xl mx-auto 
                          leading-relaxed">
              Aprenda a falar qualquer idioma de forma natural e eficiente com uma metodologia inovadora que garante fluência conversacional em apenas 3 meses! E o melhor: ganhe dinheiro e prêmios para fazer isso!
            </p>

            {/* Exibição interativa de palavra estilo Hangman */}
            {/*<div className="flex justify-center gap-2 mt-6">
              {wordDisplay.map((letter, index) => (
                <div
                  key={index}
                  className={`
                    w-8 h-12 md:w-10 md:h-14
                    flex items-center justify-center
                    border-b-2 border-regal-gold/50
                    font-medievaltech text-xl md:text-2xl
                    ${letter !== "_" ? "text-regal-gold animate-fade-in" : "text-gray-500"}
                  `}
                >
                  {letter}
                </div>
              ))}
            </div>*/}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pb-12">
            <AnimatedButton
              onClick={(e) => {
                e.stopPropagation();
                console.log("Animated button clicked!");
              }}
            />
              {/*<button 
                className="medieval-btn group relative px-8 py-4 mb-8 bg-regal-gold text-black font-medievaltech font-medium rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]"
                onClick={e => e.stopPropagation()} // Prevenir tratador de clique do herói
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  Aprender Mais
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-regal-gold to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>*/}

              {/*<button 
                className="tech-btn group px-8 py-4 bg-transparent text-regal-gold border-2 border-regal-gold/50 font-medievaltech font-medium rounded-lg transition-all duration-300 hover:border-regal-gold hover:bg-regal-gold/10 hover:scale-105"
                onClick={e => e.stopPropagation()} // Prevenir tratador de clique do herói
              >
                <span className="flex items-center justify-center gap-2">
                  <Sword className="w-5 h-5" />
                  Aprender Mais
                </span>
              </button>*/}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border-4 border-regal-gold/30">
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=0&modestbranding=1&rel=0"
                title="Language Arena Presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 
                      h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroMain;