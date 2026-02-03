import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, ArrowUp, Award } from 'lucide-react';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Contato' },
];

const contactLinks = [
  {
    icon: Phone,
    label: '+11 96921-6106',
    href: 'https://wa.me/5511969216106',
  },
  {
    icon: Instagram,
    label: '@strackcustom',
    href: 'https://instagram.com/strackcustom',
  },
  {
    icon: MapPin,
    label: 'Av. Pompéia, 1850',
    href: 'https://maps.app.goo.gl/tE7tqtusPvypHif76',
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-muted/5 border-t border-border">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/logo.png"
                  alt="STRACK CUSTOM"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>

              {/* 3M Badge */}
              <div className="mb-5">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold">
                  <Award className="w-3.5 h-3.5" />
                  APLICADOR AUTORIZADO 3M
                </span>
              </div>

              <p className="text-xs tracking-[0.15em] text-muted-foreground mb-3">
                PROTEÇÃO • TECNOLOGIA • PERSONALIZAÇÃO
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                Excelência em soluções automotivas com foco em acabamento impecável, materiais de alta performance e projetos sob medida.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-sm font-bold mb-5 uppercase tracking-wider">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-sm font-bold mb-5 uppercase tracking-wider">Contato</h4>
              <ul className="space-y-4">
                {contactLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                    >
                      <item.icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              © 2025 STRACK CUSTOM. Todos os direitos reservados.
            </p>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors group"
            >
              <span>Voltar ao topo</span>
              <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all">
                <ArrowUp className="w-4 h-4 group-hover:text-accent-foreground transition-colors" />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
