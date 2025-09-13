import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, Clock, CheckCircle, FileText, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { downloadChecklist } from '@/lib/downloadUtils';

const HecPage = () => {
  const features = [
    {
      icon: FileText,
      title: 'Degree Verification',
      description: 'Complete verification of bachelor\'s, master\'s, and doctoral degrees from Pakistani universities.'
    },
    {
      icon: CheckCircle,
      title: 'Diploma Attestation',
      description: 'Professional attestation of diplomas and certificates from recognized institutions.'
    },
    {
      icon: Star,
      title: 'Academic Records',
      description: 'Transcripts, mark sheets, and other academic documents verification.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Document Submission',
      description: 'Submit original degree/diploma with required documents'
    },
    {
      step: '2', 
      title: 'HEC Verification',
      description: 'Higher Education Commission verifies authenticity'
    },
    {
      step: '3',
      title: 'Attestation Complete',
      description: 'Receive HEC attested documents for global use'
    }
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
                <GraduationCap className="w-10 h-10" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                HEC Attestation Services
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Higher Education Commission document verification for global recognition of your Pakistani degrees and academic credentials.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground px-8 py-4">
                    Start HEC Attestation
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4"
                  onClick={() => downloadChecklist('HEC')}
                >
                  Download Checklist
                </Button>
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
                  What is <span className="text-gradient">HEC Attestation?</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  HEC (Higher Education Commission) attestation is the official verification process for Pakistani educational documents. 
                  It confirms the authenticity of your degrees, diplomas, and academic records, making them internationally recognized 
                  for employment, further education, and immigration purposes.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Processing Time:</strong> 24-48 hours</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Success Rate:</strong> 99.8%</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-accent mr-3" />
                    <span><strong>Global Recognition:</strong> 150+ Countries</span>
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

        {/* Process Steps */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                HEC Attestation <span className="text-gradient">Process</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple 3-step process to get your educational documents attested by HEC
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Required Documents */}
        <section className="section-padding">
          <div className="container">
              <h2 className="text-4xl font-bold text-center mb-12">
                Required <span className="text-gradient">Documents</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-semibold mb-6">For Degree Attestation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      Original degree certificate
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      Official transcripts/mark sheets
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      CNIC copy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      Passport copy (if required for overseas)
                    </li>
                  </ul>
                </div>
                
                <div className="card-elevated p-8">
                  <h3 className="text-2xl font-semibold mb-6">For Diploma Attestation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      Original diploma/certificate
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      Academic transcripts
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      Institution verification letter
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3" />
                      CNIC and passport copies
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary">
                    Get Your HEC Attestation Started
                  </Button>
                </Link>
              </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HecPage;