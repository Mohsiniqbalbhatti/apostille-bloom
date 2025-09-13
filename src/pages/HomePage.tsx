import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSteps from '@/components/ProcessSteps';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

import FAQ from '@/components/FAQ';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <ProcessSteps />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;