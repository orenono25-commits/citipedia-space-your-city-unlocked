import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2, User, Mail, Phone, Building2 } from 'lucide-react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessType: string;
}

export const DemoFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error('Пожалуйста, заполните обязательные поля');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Пожалуйста, введите корректный email');
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Заявка отправлена! Переходите к демо-версии.');
  };

  const businessTypes = [
    'Ресторан / Кафе',
    'Салон красоты',
    'Фитнес-клуб',
    'Розничный магазин',
    'Аптека',
    'Медицинский центр',
    'Сервисный центр',
    'Франшиза',
    'Другое',
  ];

  return (
    <section id="demo" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Бесплатный демо-доступ
              </span>
              <h2 className="section-title text-foreground mb-6">
                Попробуйте{' '}
                <span className="text-gradient-primary">Citipedia Space</span>
                {' '}прямо сейчас
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Заполните форму и получите мгновенный доступ к демо-версии сервиса. 
                Изучите возможности платформы и оцените потенциал для вашего бизнеса.
              </p>

              {/* Benefits List */}
              <ul className="space-y-4">
                {[
                  'Бесплатная базовая аналитика по городу',
                  'Изучение интерфейса без обязательств',
                  'Понимание возможностей сервиса',
                  'Консультация от наших экспертов',
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="white-card p-8 relative"
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-xl text-card-foreground">Получить демо-доступ</h3>
                    <p className="text-sm text-card-foreground/60">Заполните форму и начните анализировать</p>
                  </div>

                  {/* Name */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше имя *"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-card-foreground/5 border border-card-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-card-foreground placeholder:text-card-foreground/40"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-card-foreground/5 border border-card-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-card-foreground placeholder:text-card-foreground/40"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Телефон *"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-card-foreground/5 border border-card-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-card-foreground placeholder:text-card-foreground/40"
                      required
                    />
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Название компании"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-card-foreground/5 border border-card-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-card-foreground placeholder:text-card-foreground/40"
                    />
                  </div>

                  {/* Business Type */}
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card-foreground/5 border border-card-foreground/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-card-foreground"
                  >
                    <option value="">Тип бизнеса</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full !py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        Получить демо-доступ
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-card-foreground/50 text-center">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="#" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-card-foreground mb-4">
                    Заявка отправлена!
                  </h3>
                  <p className="text-card-foreground/70 mb-6">
                    Теперь вы можете перейти к демо-версии и изучить возможности платформы.
                  </p>
                  <a
                    href="https://rbp.qala-ai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    Перейти к демо
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
