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
              className="white-card p-6 group hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-bold text-card-foreground mb-2 flex items-center gap-2">
                {benefit.title}
                <CheckCircle2 className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-card-foreground/70 text-sm leading-relaxed">
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
                className="px-4 py-2 rounded-full bg-secondary text-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors"
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
