import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Target, BarChart3, Users2, Map, TrendingUp, Shield } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Точный выбор локации',
    description: 'Данные вместо интуиции — выбирайте место, соответствующее реальному спросу.',
  },
  {
    icon: Users2,
    title: 'Понимание аудитории',
    description: 'Кто живёт и работает в локации: социально-демографический профиль, покупательская способность.',
  },
  {
    icon: BarChart3,
    title: 'Анализ конкурентов',
    description: 'Количество и плотность конкурентов в радиусе, оценка насыщенности рынка.',
  },
  {
    icon: Map,
    title: 'Оценка инфраструктуры',
    description: 'Транспортная доступность, пешеходный трафик, близость к точкам притяжения.',
  },
  {
    icon: TrendingUp,
    title: 'Сравнение нескольких точек',
    description: 'Объективное сравнение локаций по ключевым критериям и рекомендации по выбору.',
  },
  {
    icon: Shield,
    title: 'Минимизация рисков',
    description: 'Снижайте инвестиционные риски благодаря данным и аналитике.',
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="solution" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Решение
          </span>
          <h2 className="section-title text-foreground">
            <span className="text-gradient-primary">Citipedia Space</span> — ваш аналитик локаций
          </h2>
          <p className="section-subtitle mx-auto">
            Сервис анализирует любую точку города и предоставляет объективные данные 
            для принятия верных бизнес-решений
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 group hover:border-primary/30 transition-all hover:shadow-glow"
            >
              {/* Icon */}
              <div className="feature-icon mb-4 group-hover:animate-pulse-glow transition-all">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-bold text-foreground mb-2 flex items-center gap-2">
                {benefit.title}
                <CheckCircle2 className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6">
            Подходит для любого бизнеса:
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Рестораны и кафе',
              'Салоны красоты',
              'Фитнес-клубы',
              'Розничные магазины',
              'Сервисные центры',
              'Франшизы',
              'Аптеки',
              'Медицинские клиники',
            ].map((category) => (
              <span
                key={category}
                className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border hover:border-primary/50 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
