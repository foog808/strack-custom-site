import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Award, Clock, Users, Heart, Shield } from 'lucide-react';

const differentials = [
  {
    icon: Award,
    title: 'Materiais Premium',
    description: 'Trabalhamos apenas com películas e insumos de marcas líderes como 3M',
  },
  {
    icon: Clock,
    title: 'Garantia Real',
    description: 'Garantia de até 7 anos em nossos serviços de PPF',
  },
  {
    icon: Users,
    title: 'Profissionais Certificados',
    description: 'Equipe treinada e certificada pelas principais marcas',
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada projeto é único e tratado com dedicação exclusiva',
  },
];

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 1000, suffix: '+', label: 'Clientes Atendidos' },
  { value: 7, suffix: '', label: 'Anos de Garantia PPF' },
  { value: 100, suffix: '%', label: 'Satisfação' },
  { value: 15, suffix: '+', label: 'Anos de Experiência' },
];

export function WhyChooseSection() {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-28 bg-background">
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
            Nossos Diferenciais
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            POR QUE ESCOLHER A
            <span className="text-accent"> STRACK CUSTOM</span>?
          </h2>
        </motion.div>

        {/* Differentials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-20"
        >
          {differentials.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-card to-card/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-border max-w-5xl mx-auto"
        >
          {/* 3M Mention */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Shield className="w-5 h-5 text-red-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Todos os serviços com materiais <span className="text-red-500 font-bold">3M</span> originais
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-accent mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
