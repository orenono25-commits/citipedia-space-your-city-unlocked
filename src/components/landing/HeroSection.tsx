import { motion } from 'framer-motion';
import { ArrowRight, MapPin, BarChart3, Shield, Zap } from 'lucide-react';
import heroMapBg from '@/assets/hero-map-bg.jpg';
export const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroMapBg} alt="City analytics map" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-аналитика локаций в городе</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6">
            Выбирайте{' '}
            <span className="text-gradient-primary">идеальную локацию</span>
            {' '}для вашего бизнеса
          </motion.h1>

          {/* Subheadline */}
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Анализируйте любую точку города за минуты. Минимизируйте риски инвестиций. Откройте бизнес там,
где находится ваша аудитория.</motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={scrollToDemo} className="btn-accent group">
              Получить демо-доступ
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a href="#how-it-works" className="inline-flex items-center gap-2 px-6 py-4 text-muted-foreground hover:text-foreground transition-colors font-medium">
              Узнать как это работает
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 40
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[{
            icon: Zap,
            value: '3-7 мин',
            label: 'на отчёт'
          }, {
            icon: BarChart3,
            value: '100%',
            label: 'объективных данных'
          }, {
            icon: MapPin,
            value: '28+',
            label: 'категорий бизнеса'
          }, {
            icon: Shield,
            value: 'AI',
            label: 'технологии анализа'
          }].map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.1
          }} className="glass-card p-4 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>)}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>;
};