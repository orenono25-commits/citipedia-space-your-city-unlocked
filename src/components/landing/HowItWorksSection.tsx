import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, MapPin, FileText, Send } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Анализируйте город',
    description: 'Откройте карту города и изучите общую картину: где концентрируется ваша аудитория, какие районы перспективны.',
  },
  {
    icon: MapPin,
    title: 'Выберите локацию',
    description: 'Кликните на интересующую точку и получите детальный профиль: аудитория, конкуренты, инфраструктура, трафик.',
  },
  {
    icon: FileText,
    title: 'Сформируйте отчёт',
    description: 'Сравните несколько локаций, получите рекомендации и скачайте готовый PDF-отчёт для презентации.',
  },
  {
    icon: Send,
    title: 'Принимайте решение',
    description: 'Используйте объективные данные для выбора лучшего места. Снизьте риски и откройте бизнес там, где он будет успешен.',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Как это работает
          </span>
          <h2 className="section-title text-foreground">
            4 шага к <span className="text-gradient-primary">идеальной локации</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Простой и понятный процесс получения аналитики
          </p>
        </motion.div>

        {/* Steps - Horizontal Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-primary/10 z-0" />
                )}

                <div className="white-card p-6 relative z-10 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground shadow-glow">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-card-foreground/5 flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-card-foreground mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-card-foreground/70 text-sm leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#demo" className="btn-primary inline-flex">
            Попробовать бесплатно
          </a>
        </motion.div>
      </div>
    </section>
  );
};
