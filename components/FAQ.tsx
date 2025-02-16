import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Como posso começar?",
    answer: "Começar é fácil! Simplesmente escolha seu plano de associação preferido, crie uma conta e terá acesso imediato à nossa plataforma de treinamento abrangente. Nosso processo de integração irá guiá-lo através dos primeiros passos."
  },
  {
    question: "O que torna nosso método de treinamento único?",
    answer: "Nosso método de treinamento combina tecnologia de ponta com coaching personalizado. Usamos análises avançadas para acompanhar seu progresso e adaptar o programa de treinamento às suas necessidades e objetivos específicos."
  },
  {
    question: "Com que frequência são adicionados novos materiais de treinamento?",
    answer: "Atualizamos nossos materiais de treinamento semanalmente, incluindo novas estratégias, tutoriais e exercícios de prática. Nosso conteúdo está em constante evolução para acompanhar o meta de jogos mais recente e as técnicas atuais."
  },
  {
    question: "Posso mudar entre os níveis de associação?",
    answer: "Sim, você pode atualizar ou fazer downgrade da sua associação a qualquer momento. As alterações entrarão em vigor no início do próximo ciclo de cobrança, e você terá acesso imediato aos recursos do seu novo nível após a atualização."
  },
  {
    question: "Vocês oferecem reembolsos?",
    answer: "Oferecemos uma garantia de devolução de dinheiro de 14 dias para todas as novas associações. Se você não estiver satisfeito com nosso serviço dentro deste período, pode solicitar um reembolso completo, sem perguntas."
  }
];

const FAQ = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-black via-black to-black overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtOXY5aDl6IiBzdHJva2U9IiM4QjUyRkYiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0yNyAyN2gtOXY5aDl6IiBzdHJva2U9IiM4QjUyRkYiIHN0cm9rZS1vcGFjaXR5PSIuNSIvPjwvZz48L3N2Zz4=')]"
        />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 via-regal-gold/20 to-purple-500/20 p-4"
            >
              <HelpCircle className="w-full h-full text-regal-gold" />
            </motion.div>
          </div>
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-6">
            <span className="bg-gradient-to-r from-regal-gold via-white to-regal-gold bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>
          <p className="text-lg text-gray-300 font-space max-w-2xl mx-auto">
            Encontre respostas para perguntas comuns sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group border border-purple-500/20 rounded-xl backdrop-blur-sm bg-black/50 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 hover:no-underline group-hover:text-regal-gold transition-colors">
                    <span className="text-left font-cinzel">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-regal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-regal-500/10 rounded-full blur-3xl" />
    </section>
  );
};

export default FAQ;
