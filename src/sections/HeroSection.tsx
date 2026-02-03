import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight, ChevronDown, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="inicio" ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Imagem de Fundo */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/hero-car.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
      </motion.div>

      {/* Conteúdo */}
      <motion.div style={{ opacity }} className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-20 pt-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* LOGO OTIMIZADO AQUI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <img
              src="/logo.webp"
              alt="STRACK CUSTOM"
              width="192"
              height="192"
              fetchPriority="high"
              className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto mx-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-red-600/30">
              <Award className="w-4 h-4" />
              APLICADOR AUTORIZADO 3M
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base tracking-[0.3em] text-accent font-medium mb-6"
          >
            PREMIUM AUTOMOTIVE CARE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-6"
          >
            <span className="block text-foreground">EXCELÊNCIA EM</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-accent">
              SOLUÇÕES AUTOMOTIVAS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 px-4"
          >
            Acabamento impecável, materiais de alta performance e projetos sob medida para o seu veículo.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {['PPF', 'Películas 3M', 'Envelopamento', 'Multimídia'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <Shield className="w-3.5 h-3.5 text-accent" />
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base w-full sm:w-auto shadow-lg shadow-accent/20">
              <a href="https://wa.me/5511969216106" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Agende Agora
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border/50 text-foreground hover:bg-white/5 hover:border-accent font-semibold px-8 py-6 text-base w-full sm:w-auto">
              <a href="#servicos" className="flex items-center justify-center gap-2">
                Conheça Nossos Serviços
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#servicos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
          <span className="text-xs tracking-widest uppercase">Role para baixo</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
