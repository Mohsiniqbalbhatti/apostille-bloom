import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Building2, Clock, CheckCircle, FileText, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MofaPage = () => {
  const features = [
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'MOFA attestation ensures your documents are recognized in 150+ countries worldwide.'
    },
    {
      icon: Shield,
      title: 'Official Certification',
      description: 'Ministry of Foreign Affairs official stamp provides legal validity internationally.'
    },
    {
      icon: FileText,
      title: 'All Document Types',
      description: 'Educational, commercial, and personal documents - we handle all types.'
    }
  ];

  const documentTypes = [
    {
      category: 'Educational Documents',
      items: ['Degree Certificates', 'Diplomas', 'Transcripts', 'Academic Records', 'School Certificates']
    },
    {
      category: 'Commercial Documents', 
      items: ['Business Licenses', 'Articles of Incorporation', 'Power of Attorney', 'Commercial Invoices', 'Export Documents']
    },
    {
      category: 'Personal Documents',
      items: ['Birth Certificates', 'Marriage Certificates', 'Death Certificates', 'Police Clearance', 'Medical Reports']
    }
  ];

  const countries = [
    'UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain',
    'USA', 'Canada', 'UK', 'Germany', 'Australia', 'New Zealand',
    'Malaysia', 'Singapore', 'China', 'Japan', 'South Korea'
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
                MOFA Attestation Services
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Ministry of Foreign Affairs attestation for international recognition of your Pakistani documents. 
                Essential for overseas employment, education, and business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4">
                    Start MOFA Attestation
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4">
                  View Requirements
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-accent-light">2-3 Days</div>
                  <div className="text-white/80 text-sm">Processing Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-light">150+</div>
                  <div className="text-white/80 text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-light">99.8%</div>
                  <div className="text-white/80 text-sm">Success Rate</div>
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
                  What is <span className="text-gradient">MOFA Attestation?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  MOFA (Ministry of Foreign Affairs) attestation is the final step in the document legalization process in Pakistan. 
                  It provides official government certification that your documents are genuine and legally valid for use in foreign countries. 
                  This attestation is mandatory for most international purposes including employment, education, business, and immigration.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Processing Time:</strong> 2-3 business days</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Validity:</strong> Lifetime (unless document expires)</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Recognition:</strong> Worldwide acceptance</span>
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

        {/* Document Types */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Documents We <span className="text-gradient">Attest</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We provide MOFA attestation for all types of documents required for international use
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {documentTypes.map((category, index) => (
                <div key={index} className="card-elevated p-8 text-center hover:scale-105 transition-transform">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                MOFA Attestation <span className="text-gradient">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding the complete document legalization chain
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
                
                <div className="space-y-12">
                  {[
                    {
                      step: '1',
                      title: 'Document Preparation',
                      description: 'Ensure documents are properly notarized and have all required attestations (HEC, IBCC, etc.)',
                      time: 'Before submission'
                    },
                    {
                      step: '2', 
                      title: 'MOFA Submission',
                      description: 'Submit documents to Ministry of Foreign Affairs with required fees and forms',
                      time: 'Day 1'
                    },
                    {
                      step: '3',
                      title: 'Verification Process',
                      description: 'MOFA verifies the authenticity of previous attestations and document genuineness',
                      time: 'Day 1-2'
                    },
                    {
                      step: '4',
                      title: 'Final Attestation',
                      description: 'MOFA stamp and signature applied, making documents internationally valid',
                      time: 'Day 2-3'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 relative z-10">
                        {item.step}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                          <span className="text-sm text-accent font-medium bg-accent/10 px-3 py-1 rounded-full">
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
          </div>
        </section>

        {/* Countries Served */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">
                Countries We <span className="text-gradient">Serve</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                MOFA attested documents accepted worldwide
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {countries.map((country, index) => (
                  <div key={index} className="bg-card border border-card-border rounded-lg p-4 text-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <span className="font-medium">{country}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-8">
                And many more countries worldwide...
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container">
            <div className="card-elevated p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Ready for MOFA Attestation?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Get your documents attested by MOFA for international recognition. 
                Our experts handle the entire process professionally and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary">
                    Start Your Application
                  </Button>
                </Link>
                <Button size="lg" className="btn-outline">
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MofaPage;