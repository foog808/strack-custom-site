import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Clock, Send, CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactInfo = [
  {
    icon: Phone,
    title: 'WhatsApp',
    content: '+11 96921-6106 / 92066-1010',
    href: 'https://wa.me/5511969216106',
    isExternal: true,
  },
  {
    icon: Instagram,
    title: 'Instagram',
    content: '@strackcustom',
    href: 'https://instagram.com/strackcustom',
    isExternal: true,
  },
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Av. Pompéia, 1850',
    href: 'https://maps.app.goo.gl/tE7tqtusPvypHif76',
    isExternal: true,
  },
  {
    icon: Clock,
    title: 'Horário',
    content: 'Seg-Sex: 9h às 18h | Sáb: 9h às 13h',
    href: null,
    isExternal: false,
  },
];

const services = [
  'PPF - Paint Protection Film',
  'Película Antivandalismo',
  'Película de Privacidade & Anticalor',
  'Multimídia & Áudio',
  'Iluminação LED',
  'Acessórios & Personalização',
];

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    servico: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        servico: '',
        mensagem: '',
      });
    }, 3000);
  };

  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-28 bg-background">
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
            FALE CONOSCO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            ENTRE EM <span className="text-accent">CONTATO</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Agende sua visita e transforme seu veículo com a qualidade 3M
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* 3M Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold">
                  <Award className="w-4 h-4" />
                  APLICADOR AUTORIZADO 3M
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Informações de Contato
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Estamos prontos para atender você e tirar todas as suas dúvidas. Entre em contato pelos canais abaixo ou preencha o formulário.
              </p>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.isExternal ? '_blank' : undefined}
                        rel={item.isExternal ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover:bg-card/80 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.title}</p>
                          <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                            {item.content}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.title}</p>
                          <p className="text-sm font-semibold">{item.content}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-border shadow-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-6">
                  Envie uma Mensagem
                </h3>

                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Mensagem Enviada!</h4>
                    <p className="text-sm text-muted-foreground">
                      Entraremos em contato em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-sm">
                          Nome <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="nome"
                          placeholder="Seu nome"
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-sm">
                          Telefone <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="telefone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="servico" className="text-sm">
                        Serviço de Interesse
                      </Label>
                      <Select
                        value={formData.servico}
                        onValueChange={(value) => setFormData({ ...formData, servico: value })}
                      >
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem" className="text-sm">
                        Mensagem
                      </Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Conte-nos sobre seu projeto..."
                        value={formData.mensagem}
                        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                        rows={4}
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-5"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
