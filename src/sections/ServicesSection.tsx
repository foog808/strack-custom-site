import { motion } from 'framer-motion';
import { Shield, Lock, Sun, Music, Lightbulb, Settings, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Shield,
    title: 'PPF - Paint Protection Film',
    description: 'Proteção de pintura autoregenerativa contra riscos, desgaste e detritos. Resistência a chuva ácida, produtos químicos e raios UV.',
    features: ['Autocura térmica', '7 anos de garantia', 'Alta transparência'],
    highlight: true,
  },
  {
    icon: Lock,
    title: 'Película Antivandalismo',
    description: 'Proteção contra estilhaços e invasão. Bloqueio de 99% dos raios UV com máxima segurança para você e sua família.',
    features: ['Proteção balística', 'Garantia 3 anos', 'Instalação premium'],
    highlight: false,
  },
  {
    icon: Sun,
    title: 'Película de Privacidade & Anticalor',
    description: 'Controle solar de alta performance que reduz o calor interno e garante privacidade sem comprometer a visibilidade.',
    features: ['Bloqueio UV 99%', 'Redução de calor', 'Visibilidade interna'],
    highlight: false,
  },
  {
    icon: Music,
    title: 'Multimídia & Áudio',
    description: 'Projetos de som e multimídia personalizados. Das centrais multimídia aos sistemas de alta fidelidade.',
    features: ['Centrais Android', 'Alto-falantes', 'Subwoofers'],
    highlight: false,
  },
  {
    icon: Lightbulb,
    title: 'Iluminação LED',
    description: 'Upgrade de iluminação com tecnologia LED de última geração. Mais segurança e estilo para seu veículo.',
    features: ['Faróis LED', 'Lanternas', 'Iluminação interna'],
    highlight: false,
  },
  {
    icon: Settings,
    title: 'Acessórios & Personalização',
    description: 'Envelopamento, revestimentos em couro, alarmes e tudo para deixar seu carro com a sua cara.',
    features: ['Envelopamento', 'Couro sintético', 'Alarmes'],
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function ServicesSection() {
  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-28 bg-muted/5">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm tracking-[0.2em] text-accent mb-3 sm:mb-4">
            O QUE FAZEMOS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Soluções completas para proteção e personalização do seu veículo com materiais 3M
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-7xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                service.highlight 
                  ? 'border-accent/50 shadow-lg shadow-accent/5' 
                  : 'border-border hover:border-accent/30'
              }`}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                  service.highlight ? 'bg-accent/20' : 'bg-accent/10 group-hover:bg-accent/20'
                }`}>
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                  >
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                variant="ghost"
                className="p-0 h-auto text-accent hover:text-accent/80 hover:bg-transparent font-medium text-sm group/btn"
              >
                <a 
                  href="https://wa.me/5511969216106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
