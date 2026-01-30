import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import heroMapBg from '@/assets/hero-map-bg.jpg';

export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      {/* Background with gradient glow */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroMapBg} 
          alt="City analytics map" 
          className="w-full h-full object-cover opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        {/* Magenta/violet glow at bottom */}
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Аналитика локаций</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground"
            >
              Принимайте{' '}
              <span className="text-gradient-primary">умные решения</span>
              {' '}с Citipedia Space
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
            >
              Анализируйте локации с помощью ИИ, чтобы понять ДНК места. 
              Превращаем данные в ясные инсайты для быстрых и уверенных решений.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button onClick={scrollToDemo} className="btn-primary group">
                Начать сейчас
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

            {/* Trust Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-sm text-muted-foreground"
            >
              Нам доверяют 100+ компаний
            </motion.p>
          </div>

          {/* Right Side - White Card (like MyTraffic) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="white-card p-8 md:p-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-card-foreground mb-4">
                  Откройте <span className="text-gradient-primary">ДНК локации</span>
                </h2>
                <p className="text-muted text-card-foreground/70 mb-8">
                  Полная аналитика любой точки города за несколько минут
                </p>
                
                {/* Demo Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '3-7 мин', label: 'на анализ' },
                    { value: '28+', label: 'категорий данных' },
                    { value: '500+', label: 'источников' },
                    { value: 'AI', label: 'инсайты' },
                  ].map((stat) => (
                    <div 
                      key={stat.label}
                      className="p-4 rounded-xl bg-card-foreground/5"
                    >
                      <div className="text-2xl font-display font-bold text-gradient-primary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-card-foreground/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
