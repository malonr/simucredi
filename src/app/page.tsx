import Header from '@/components/ui/Header';
import HeroSection from '@/components/ui/HeroSection';
import FeatureCards from '@/components/ui/FeatureCards';
import Footer from '@/components/ui/Footer';
import CreditSimulatorClient from '@/components/simulador/CreditSimulatorClient';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <FeatureCards />
        
        <section id="simulador" className="py-16">
          <CreditSimulatorClient />
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
