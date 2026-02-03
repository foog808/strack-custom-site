import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

interface GallerySectionProps {
  onImageClick: (image: string, title: string) => void;
}

const galleryItems = [
  {
    src: '/images/promo-inauguracao.jpg',
    title: 'Promoção de Inauguração',
    category: '3M',
    priority: true,
  },
  {
    src: '/images/ppf-promo.jpg',
    title: 'PPF Paint Protection Film',
    category: 'PPF',
    priority: true,
  },
  {
    src: '/images/servicos-geral.jpg',
    title: 'Nossos Serviços',
    category: 'Serviços',
    priority: true,
  },
  {
    src: '/images/gallery-ppf.jpg',
    title: 'Proteção PPF',
    category: 'PPF',
    priority: false,
  },
  {
    src: '/images/gallery-led.jpg',
    title: 'Iluminação LED',
    category: 'LED',
    priority: false,
  },
  {
    src: '/images/gallery-workshop.jpg',
    title: 'Nossa Oficina',
    category: 'Oficina',
    priority: false,
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function GallerySection({ onImageClick }: GallerySectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
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
            PORTFOLIO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            NOSSOS <span className="text-accent">TRABALHOS</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Confira nossas promoções e projetos realizados
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-card"
              onClick={() => onImageClick(item.src, item.title)}
            >
              {/* Image - Sem lazy loading para garantir carregamento */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ display: 'block' }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Category Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                <span className="px-2.5 sm:px-3 py-1 bg-red-600/90 backdrop-blur-sm rounded-full text-[10px] sm:text-xs text-white font-semibold">
                  {item.category}
                </span>
              </div>

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Title */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10">
                <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-accent transition-colors drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
