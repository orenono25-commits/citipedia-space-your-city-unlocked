import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Что такое Citipedia Space?',
    answer:
      'Citipedia Space — это аналитический сервис, который помогает владельцам бизнеса выбрать оптимальную локацию для открытия точки. Сервис анализирует демографию, конкурентов, транспортную доступность и другие факторы.',
  },
  {
    question: 'Какие данные входят в аналитику?',
    answer:
      'В отчёт входят: демографический профиль жителей и работающих в локации, анализ конкурентов по вашей категории бизнеса, оценка пешеходного трафика, транспортной доступности, близости к точкам притяжения и многое другое.',
  },
  {
    question: 'Для каких городов доступен сервис?',
    answer:
      'На данный момент сервис доступен для крупных городов Казахстана. Мы активно расширяем географию покрытия. Свяжитесь с нами, чтобы узнать о доступности для вашего города.',
  },
  {
    question: 'Сколько стоит полный отчёт?',
    answer:
      'Стоимость зависит от выбранного тарифа. Базовая аналитика доступна бесплатно в демо-версии. Для получения детального отчёта с рекомендациями предусмотрены платные тарифы. Оставьте заявку, и мы подберём оптимальное решение.',
  },
  {
    question: 'Как быстро я получу отчёт?',
    answer:
      'Базовый отчёт формируется за 3-7 минут автоматически. Для более детального анализа с рекомендациями эксперта может потребоваться до 24 часов.',
  },
  {
    question: 'Можно ли сравнить несколько локаций?',
    answer:
      'Да, сервис позволяет сравнить несколько локаций по ключевым критериям и получить рекомендацию по выбору оптимального варианта.',
  },
  {
    question: 'Откуда берутся данные?',
    answer:
      'Мы используем данные из открытых и проприетарных источников: государственная статистика, геоданные, данные о транзакциях и посещениях, информация об объектах инфраструктуры и многое другое. Все данные обновляются регулярно.',
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Часто задаваемые вопросы
          </span>
          <h2 className="section-title text-foreground">
            Ответы на <span className="text-gradient-primary">ваши вопросы</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none px-6 py-2 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Не нашли ответа на свой вопрос?</p>
          <a href="#demo" className="btn-primary inline-flex">
            Связаться с нами
          </a>
        </motion.div>
      </div>
    </section>
  );
};
