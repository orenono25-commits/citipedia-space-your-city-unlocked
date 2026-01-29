import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPinOff, Users, TrendingDown, Clock } from 'lucide-react';

const problems = [
  {
    icon: MapPinOff,
    title: 'Риск неправильного выбора адреса',
    description: 'Выбор точки «на глаз» без анализа может привести к потере инвестиций и закрытию бизнеса в первый же год.',
  },
  {
    icon: Users,
    title: 'Нет понимания целевой аудитории',
    description: 'Кто живёт и работает рядом? Соответствует ли аудитория вашему бизнесу? Сколько потенциальных клиентов поблизости?',
  },
  {
    icon: TrendingDown,
    title: 'Неизвестное конкурентное окружение',
    description: 'Сколько конкурентов в радиусе? Насыщен ли рынок или есть возможность для роста?',
  },
  {
    icon: Clock,
    title: 'Долгий сбор данных вручную',
    description: 'Анализ локации требует часов работы — изучение района, посещения, сбор информации из разных источников.',
  },
];

export const ProblemsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="problems" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
            Проблемы бизнеса
          </span>
          <h2 className="section-title text-foreground">
            Почему 60% новых бизнесов{' '}
            <span className="text-destructive">закрываются</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            Неправильный выбор локации — одна из главных причин провала. 
            Вот с чем сталкиваются предприниматели:
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 relative overflow-hidden group hover:border-destructive/30 transition-colors"
            >
              {/* Number */}
              <span className="step-number !text-destructive">0{index + 1}</span>
              
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 relative z-10">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-display font-bold text-foreground mb-3 relative z-10">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {problem.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
