import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-attestation.jpg';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    'Fast & Secure',
    'Globally Recognized',
    'Professionally Verified'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '50,000+', label: 'Documents Processed' },
    { number: '150+', label: 'Countries Served' },
    { number: '99.8%', label: 'Success Rate' },
    { number: '24-48hrs', label: 'Average Processing' }
  ];

  const features = [
    { icon: CheckCircle, text: 'HEC, MOFA, IBCC, BTE Attestation' },
    { icon: Clock, text: '24-48 Hour Processing Time' },
    { icon: Shield, text: 'Secure & Confidential Service' }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional document attestation services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by 50,000+ Professionals
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-in">
            <span className="block">Trusted Document</span>
            <span className="block">Attestation Services</span>
            <span className="block text-gradient bg-gradient-to-r from-accent-light to-accent bg-clip-text text-transparent">
              {taglines[currentTagline]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get your HEC, MOFA, IBCC, BTE documents attested quickly and securely for global recognition. Professional service you can trust.
          </p>

          {/* Features List */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-white/90">
                <feature.icon className="w-5 h-5 mr-3 text-accent-light" />
                <span className="text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4 text-lg">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                View All Services
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 opacity-20 animate-float hidden lg:block">
        <div className="w-20 h-20 bg-accent rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-10 opacity-20 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-accent-light rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;