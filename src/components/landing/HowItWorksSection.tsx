import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, MapPin, FileText, Send, ArrowDown } from 'lucide-react';

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

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className={`flex items-start gap-6 md:gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-glow">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow-accent">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className={`flex-1 pb-12 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 md:left-10 top-20 md:top-24 w-px h-12 md:h-8">
                  <div className="w-full h-full bg-gradient-to-b from-primary/50 to-transparent" />
                  <ArrowDown className="w-4 h-4 text-primary/50 absolute -bottom-4 -left-1.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="#demo" className="btn-accent inline-flex">
            Попробовать бесплатно
          </a>
        </motion.div>
      </div>
    </section>
  );
};
