import { motion } from "framer-motion";
import { Globe, Languages } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const languages = [
  "English", "Spanish", "Portuguese", "French", "Italian", "German", "Dutch", 
  "Russian", "Mandarin", "Japanese", "Korean", "Arabic", "Hindi", "Bengali",
  "Turkish", "Persian", "Vietnamese", "Thai", "Indonesian", "Greek", "Swedish",
  "Norwegian", "Danish", "Finnish", "Polish", "Czech", "Slovak", "Hungarian",
  "Romanian", "Bulgarian", "Serbian", "Croatian", "Ukrainian", "Hebrew", "Hindi",
  "Urdu", "Punjabi", "Tamil", "Telugu", "Kannada", "Malayalam", "Marathi",
  "Gujarati", "Bengali", "Nepali", "Sinhala", "Khmer", "Lao", "Burmese",
  "Mongolian", "Tibetan", "Kazakh", "Uzbek", "Kyrgyz", "Tajik", "Turkmen",
  "Armenian", "Georgian", "Azerbaijani", "Albanian", "Lithuanian", "Latvian",
  "Estonian", "Slovenian", "Macedonian", "Bosnian", "Maltese", "Irish",
  "Welsh", "Scottish Gaelic", "Breton", "Basque", "Catalan", "Galician",
  "Corsican", "Sardinian", "Sicilian", "Latin", "Ancient Greek", "Sanskrit",
  "Classical Chinese", "Old English", "Middle English", "Old Norse"
];

const AboutUs = () => {
  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-br from-black via-regal/50 to-black overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,0,0,0.1),rgba(0,0,0,0))]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtOXY5aDl6IiBzdHJva2U9IiM4QjAwMDAiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0yNyAyN2gtOXY5aDl6IiBzdHJva2U9IiM4QjAwMDAiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjwvZz48L3N2Zz4=')]"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Photo and Stats */}
            <div className="space-y-8">
              {/* Avatar and Globe Icon */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="relative w-48 h-48 mx-auto"
                >
                  <Avatar className="w-48 h-48 border-4 border-regal-500/30">
                    <AvatarImage src="/vitor.jpeg" alt="Vitor" className="object-cover" />
                    <AvatarFallback className="bg-regal-900/30">
                      <Globe className="w-20 h-20 text-regal-400" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-regal-500/20 to-regal-500/20 blur-xl opacity-50 animate-pulse" />
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="bg-regal-900/20 backdrop-blur-sm border border-regal-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Languages className="w-8 h-8 text-regal-400" />
                    <h3 className="text-2xl font-cinzel font-bold text-regal-300">
                      Vitor Piana
                    </h3>
                  </div>
                  <p className="text-gray-400 font-space">
                  Vitor é um Hiperpoliglota apaixonado por aprendizagem de idiomas que revolucionou a maneira de como estudar uma nova lingua.
                  </p>
                </div>

                <div className="bg-regal-900/20 backdrop-blur-sm border border-regal-500/20 rounded-xl p-6">
                  <h4 className="text-xl font-cinzel font-bold text-regal-300 mb-2">
                    Anos de Experiência
                  </h4>
                  <p className="text-gray-400 font-space">
                  Descubra o método que o fez aprender mais de 40 idiomas aos 20 anos e que pode transformar você em um hiperpoliglota.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Languages List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-regal-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-cinzel font-bold text-regal-300 mb-4">
                  Language Proficiency
                </h3>
                
                <ScrollArea className="h-[400px] rounded-md border border-regal-500/20 p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {languages.map((language, index) => (
                      <motion.div
                        key={language}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.02 }}
                        className="group relative"
                      >
                        <div className="bg-regal-900/20 rounded-lg p-2 hover:bg-regal-900/30 transition-colors">
                          <p className="text-gray-400 group-hover:text-regal-300 transition-colors">
                            {language}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -inset-4 bg-gradient-to-r from-regal-500/20 to-regal-500/20 rounded-xl blur-xl opacity-30 -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-regal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-regal-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default AboutUs;
