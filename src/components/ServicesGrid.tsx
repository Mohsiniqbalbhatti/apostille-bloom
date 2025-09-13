import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Building2, 
  FileCheck, 
  Award, 
  MapPin, 
  Languages,
  ArrowRight,
  Clock,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesGrid = () => {
  const services = [
    {
      id: 'hec',
      title: 'HEC Attestation',
      description: 'Higher Education Commission document verification for degrees, diplomas, and academic certificates.',
      icon: GraduationCap,
      features: ['Degree Verification', 'Diploma Attestation', 'Academic Records'],
      processingTime: '24-48 hours',
      link: '/hec',
      color: 'from-primary to-primary-light'
    },
    {
      id: 'mofa',
      title: 'MOFA Attestation',
      description: 'Ministry of Foreign Affairs certification for international document recognition.',
      icon: Building2,
      features: ['Document Certification', 'Global Recognition', 'Official Stamps'],
      processingTime: '2-3 days',
      link: '/mofa',
      color: 'from-accent to-accent-light'
    },
    {
      id: 'ibcc',
      title: 'IBCC Verification',
      description: 'Inter Board Committee of Chairmen verification for secondary education certificates.',
      icon: FileCheck,
      features: ['Certificate Verification', 'Grade Equivalency', 'Academic Validation'],
      processingTime: '3-5 days',
      link: '/ibcc',
      color: 'from-primary-light to-accent'
    },
    {
      id: 'bte',
      title: 'BTE Attestation',
      description: 'Board of Technical Education verification for technical and vocational certificates.',
      icon: Award,
      features: ['Technical Certificates', 'Vocational Training', 'Skill Verification'],
      processingTime: '2-4 days',
      link: '/bte',
      color: 'from-accent-light to-primary'
    },
    {
      id: 'embassy',
      title: 'Embassy Services',
      description: 'Embassy attestation and consular services for specific country requirements.',
      icon: MapPin,
      features: ['Embassy Stamps', 'Consular Services', 'Country-Specific Requirements'],
      processingTime: '5-7 days',
      link: '/embassy',
      color: 'from-primary to-accent-light'
    },
    {
      id: 'translation',
      title: 'Translation Services',
      description: 'Certified document translation services in multiple languages.',
      icon: Languages,
      features: ['Certified Translation', '20+ Languages', 'Official Acceptance'],
      processingTime: '1-3 days',
      link: '/translation',
      color: 'from-accent to-primary-light'
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Attestation Services</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Professional document verification services for global recognition. Choose from our comprehensive range of attestation options.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="card-elevated group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Service Icon & Header */}
              <div className="p-8 pb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Processing Time */}
                <div className="flex items-center text-sm text-accent font-medium mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.processingTime}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-8 pb-8">
                <Link to={service.link}>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-muted-foreground mb-6">
            Need help choosing the right service?
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-primary">
              Get Professional Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;