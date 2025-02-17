
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sword } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const AnimatedButton = ({
  text = "Iniciar Jornada",
  className,
  ...props
}: AnimatedButtonProps) => {
  const [isSliced, setIsSliced] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isSliced) {
      setIsSliced(true);
      setTimeout(() => setIsSliced(false), 1000);
    }
    props.onClick?.(e);
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

      <button
        {...props}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative group py-4 px-8 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none",
          className
        )}
      >
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-r from-regal-500/20 via-regal-gold/20 to-regal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-[1px] bg-black rounded-lg" />

        {/* Animated borders */}
        <div className="absolute inset-[1px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-regal-gold via-regal-500 to-regal-gold opacity-30" />
          <motion.div
            animate={{
              backgroundPosition: isHovered ? ["0% 0%", "100% 100%"] : "0% 0%",
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent bg-[length:200%_200%] opacity-20"
          />
        </div>

        {/* Button content */}
        <div className="relative z-10 flex items-center justify-center gap-2">
          <span className="font-cinzel font-bold text-regal-gold">
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
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sword className="w-5 h-5 text-regal-gold" />
          </motion.div>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-regal-gold via-regal to-regal-gold rounded-lg opacity-0 group-hover:opacity-30 blur transition-opacity duration-500" />
      </button>
    </div>
  );
};

export default AnimatedButton;
