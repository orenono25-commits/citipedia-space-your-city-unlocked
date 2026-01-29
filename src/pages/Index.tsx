import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProblemsSection } from '@/components/landing/ProblemsSection';
import { SolutionSection } from '@/components/landing/SolutionSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { DemoFormSection } from '@/components/landing/DemoFormSection';
import { FAQSection } from '@/components/landing/FAQSection';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <HowItWorksSection />
        <DemoFormSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
