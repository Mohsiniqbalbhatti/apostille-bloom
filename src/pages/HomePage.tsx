import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ProcessSteps from '@/components/ProcessSteps';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import LatestUpdatesMarquee from '@/components/LatestUpdatesMarquee';
import CountryFlagsMarquee from '@/components/CountryFlagsMarquee';
import FAQ from '@/components/FAQ';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <LatestUpdatesMarquee />
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <CountryFlagsMarquee />
        <ProcessSteps />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;