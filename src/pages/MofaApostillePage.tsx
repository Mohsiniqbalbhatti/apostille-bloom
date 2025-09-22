import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Clock, CheckCircle, FileText, Globe, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { downloadChecklist } from '@/lib/downloadUtils';
import FloatingActionButton from '@/components/FloatingActionButton';
import ScrollToTop from '@/components/ScrollToTop';

const MofaApostillePage = () => {
  const features = [
    {
      icon: Globe,
      title: 'Hague Convention Recognition',
      description: 'Apostille certificate recognized by 124+ Hague Convention member countries worldwide.'
    },
    {
      icon: Star,
      title: 'Simplified Process',
      description: 'Single authentication eliminates multiple embassy attestations for convention countries.'
    },
    {
      icon: FileText,
      title: 'Premium Service',
      description: 'Higher-tier document authentication with enhanced international validity.'
    }
  ];

  const documentTypes = [
    {
      category: 'Educational Documents',
      items: ['University Degrees', 'Diplomas', 'Transcripts', 'Academic Certificates', 'Research Papers']
    },
    {
      category: 'Legal Documents', 
      items: ['Power of Attorney', 'Affidavits', 'Court Orders', 'Notarized Documents', 'Legal Contracts']
    },
    {
      category: 'Civil Documents',
      items: ['Birth Certificates', 'Marriage Certificates', 'Death Certificates', 'Divorce Decrees', 'Adoption Papers']
    }
  ];

  const hagueCountries = [
    'Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Canada',
    'China', 'France', 'Germany', 'India', 'Italy', 'Japan',
    'Netherlands', 'New Zealand', 'Russia', 'South Africa', 'Spain', 'UK'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient text-white py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl mx-auto mb-8 flex items-center justify-center">
                <Building2 className="w-10 h-10" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                MOFA Apostille Services
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Hague Convention Apostille certification for streamlined international document recognition. 
                Essential for 124+ member countries with simplified authentication process.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4">
                    Get Apostille Certificate
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4"
                  onClick={() => downloadChecklist('MOFA Apostille')}
                >
                  Download Requirements
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-light">3-5 Days</div>
                  <div className="text-white/80 text-sm">Processing Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-light">124+</div>
                  <div className="text-white/80 text-sm">Convention Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-light">Premium</div>
                  <div className="text-white/80 text-sm">Authentication</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="section-padding">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  What is <span className="text-gradient">MOFA Apostille?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  MOFA Apostille is Pakistan's implementation of the Hague Convention of 1961, which entered into force in March 2023. 
                  This premium certification service provides a simplified authentication process for documents destined for Hague Convention member countries.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Unlike traditional attestation requiring multiple steps, an Apostille certificate eliminates the need for embassy attestation, 
                  making it a faster and more efficient option for international document recognition with higher fees reflecting the premium service.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Processing Time:</strong> 3-5 business days</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Validity:</strong> Lifetime (unless document expires)</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Recognition:</strong> 124+ Hague Convention countries</span>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="card-elevated p-6 hover:scale-105 transition-transform">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Apostille vs Attestation Comparison */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Apostille vs <span className="text-gradient">Traditional Attestation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding the key differences between Apostille and regular MOFA attestation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Apostille Column */}
              <div className="card-elevated p-8 border-l-4 border-l-accent">
                <div className="flex items-center mb-6">
                  <Star className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-bold text-accent">MOFA Apostille</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>For Hague Convention Countries:</strong> 124+ member nations
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Simplified Process:</strong> Single authentication certificate
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Higher Fees:</strong> Premium service with enhanced validity
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>No Embassy Required:</strong> Direct acceptance by authorities
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Processing Time:</strong> 3-5 business days
                    </div>
                  </li>
                </ul>
              </div>

              {/* Traditional Attestation Column */}
              <div className="card-elevated p-8 border-l-4 border-l-primary">
                <div className="flex items-center mb-6">
                  <Building2 className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-primary">Traditional MOFA</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>For Non-Convention Countries:</strong> All other nations
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Multi-Step Process:</strong> MOFA + Embassy attestation required
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Standard Fees:</strong> Regular attestation charges
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Embassy Attestation:</strong> Additional step required
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Processing Time:</strong> 2-3 business days (MOFA only)
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Document Types */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Documents Eligible for <span className="text-gradient">Apostille</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Public documents issued by Pakistani authorities eligible for Apostille certification
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {documentTypes.map((category, index) => (
                <div key={index} className="card-elevated p-8 hover:scale-105 transition-transform">
                  <h3 className="text-2xl font-semibold mb-6 text-primary text-center">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20">
              <h4 className="text-lg font-semibold mb-3 text-accent">Important Note:</h4>
              <p className="text-sm text-muted-foreground">
                Only public documents (issued by government authorities) are eligible for Apostille. Private documents 
                must first be notarized by a notary public to become eligible for Apostille certification.
              </p>
            </div>
          </div>
        </section>

        {/* Hague Convention Countries */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Hague Convention <span className="text-gradient">Member Countries</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Apostille certificates accepted in these 124+ countries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {hagueCountries.map((country, index) => (
                <div key={index} className="bg-card border border-card-border rounded-lg p-4 text-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <span className="font-medium text-sm">{country}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 space-y-2">
              <p className="text-muted-foreground">
                And 106+ more Hague Convention member countries...
              </p>
              <p className="text-sm text-accent font-medium">
                Pakistan joined the Hague Apostille Convention in March 2023
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Apostille <span className="text-gradient">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Streamlined authentication process for Hague Convention countries
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
              
              <div className="space-y-12">
                {[
                  {
                    step: '1',
                    title: 'Document Verification',
                    description: 'Verify documents are genuine public documents or properly notarized private documents',
                    time: 'Pre-submission'
                  },
                  {
                    step: '2', 
                    title: 'Apostille Application',
                    description: 'Submit documents to MOFA Apostille department with required forms and premium fees',
                    time: 'Day 1'
                  },
                  {
                    step: '3',
                    title: 'Authentication Process',
                    description: 'MOFA verifies document authenticity and issues Apostille certificate per Hague Convention',
                    time: 'Day 2-4'
                  },
                  {
                    step: '4',
                    title: 'Apostille Certificate',
                    description: 'Apostille certificate issued - ready for use in all Hague Convention member countries',
                    time: 'Day 3-5'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10">
                      {item.step}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-4 mb-2 flex-wrap">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="text-xs font-semibold text-white bg-gradient-to-r from-accent to-primary px-3 py-1.5 rounded-full shadow-sm border border-accent/20">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <div className="card-elevated p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Need Apostille Certification?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get your documents authenticated with MOFA Apostille for seamless international recognition 
                in Hague Convention member countries. Premium service with enhanced validity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary">
                    Start Apostille Process
                  </Button>
                </Link>
                <Button size="lg" className="btn-outline">
                  Get Expert Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButton />
      <ScrollToTop />
    </div>
  );
};

export default MofaApostillePage;