import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sword } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const AnimatedButton2 = ({
  text = "Escolher Cavaleiro",
  className,
  onClick,
  ...props
}: AnimatedButtonProps) => {
  const [isSliced, setIsSliced] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Slice animation
    setIsSliced(true);
    setTimeout(() => setIsSliced(false), 1000);

    // Direct click handler
    if (onClick) {
      onClick(e);
    } else {
      // Fallback redirect
      window.location.href = 'https://www.google.com.br';
    }
  };

  return (
    <div className="relative py-0 px-0">
      {/* Sword effect on click */}
      <AnimatePresence>
        {isSliced && (
          <motion.div
            initial={{ rotate: -45, x: -100, opacity: 0 }}
            animate={{ rotate: -45, x: 100, opacity: [0, 1, 0] }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 z-20 pointer-events-none"
          >
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent blur-sm" />
            <Sword className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 text-orange-500" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gold Shining Glow Blur Background */}
      <motion.div
        className="absolute -inset-4 z-0 bg-gradient-to-r from-regal-gold/50 via-regal-gold/30 to-regal-gold/50 rounded-xl opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
          backgroundPosition: ["0% 0%", "100% 100%"],
          boxShadow: [
            '0 0 80px rgba(255,215,0,0.7)',
            '0 0 120px rgba(255,215,0,0.9)',
            '0 0 80px rgba(255,215,0,0.7)'
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundSize: '200% 200%',
          filter: 'brightness(1.2) contrast(1.2)'
        }}
      />

      <motion.div 
        className="relative py-0 px-0"
        animate={!isHovered ? {
          y: [0, -10, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }
        } : {}}
      >
        <button
          type="button"
          {...props}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "relative group py-4 px-8 w-full rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.6)] cursor-pointer",
            className
          )}
        >
          {/* Dark 3D Shadow Effect */}
          <motion.div
            className="absolute -inset-2 bg-black/40 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              y: [0, 5, 0],
              scale: [1, 0.98, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />

          {/* Animated Gold Border */}
          <motion.div
            className="absolute -inset-0.5 rounded-lg"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              backgroundImage: [
                "linear-gradient(90deg, transparent, rgba(255,215,0,0.7), transparent)",
                "linear-gradient(90deg, transparent, rgba(255,215,0,1), transparent)"
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
            style={{
              backgroundSize: "200% 100%",
              boxShadow: "0 0 25px rgba(255,215,0,0.8), 0 0 10px rgba(255,165,0,0.6)"
            }}
          />

          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-regal-gold/30 via-regal-gold/20 to-regal-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-[1px] bg-black rounded-lg" />

          {/* Animated borders */}
          <div className="absolute inset-[1px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-regal-gold via-orange-500 to-regal-gold opacity-40" />
            <motion.div
              animate={{
                backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_200%] opacity-30"
            />
          </div>

          {/* Intense Neon Glow Effect */}
          <motion.div
            className="absolute -inset-1 bg-gradient-to-r from-regal-gold/90 via-orange-500/90 to-regal-gold/90 rounded-lg opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />

          {/* Pulsating Neon Border */}
          <motion.div
            className="absolute -inset-0.5 border-2 border-transparent rounded-lg"
            animate={{
              borderColor: [
                'rgba(255,215,0,0.5)', 
                'rgba(255,165,0,0.8)', 
                'rgba(255,255,255,0.6)', 
                'rgba(255,215,0,0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            style={{
              boxShadow: '0 0 20px rgba(255,215,0,0.5), 0 0 40px rgba(255,165,0,0.3)'
            }}
          />

          {/* Button content */}
          <div className="relative z-100 flex items-center justify-center gap-2">
            <span className="font-cinzel font-bold text-white hover:text-regal text-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
              {isSliced ? (
                <div className="flex gap-4">
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: [-20, 20], opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {text.slice(0, text.length / 2)}
                  </motion.span>
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: [20, -20], opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {text.slice(text.length / 2)}
                  </motion.span>
                </div>
              ) : (
                text
              )}
            </span>
            <motion.div
              animate={{ 
                rotate: isHovered ? 360 : 0,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 0.5,
                scale: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <Sword className="w-5 h-5 text-white hover:text-regal drop-shadow-[0_0_5px_rgba(255,215,0,0.7)]" />
            </motion.div>
          </div>

          {/* Glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-regal-gold via-orange-500 to-regal-gold rounded-lg opacity-50 group-hover:opacity-40 blur transition-opacity duration-500" />
        </button>
      </motion.div>
    </div>
  );
};

export default AnimatedButton2;
