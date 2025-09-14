import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Shield, 
  Clock, 
  CheckCircle,
  Settings,
  Wrench,
  Users,
  Building2,
  Phone,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollToTop from "@/components/ScrollToTop";

const BtePage = () => {
  const documents = [
    "Technical Education Certificates",
    "Vocational Training Certificates",
    "Diploma in Engineering",
    "Commerce Certificates", 
    "Professional Training Documents",
    "Trade Test Certificates"
  ];

  const boards = [
    {
      name: "Punjab Board of Technical Education",
      location: "Lahore",
      specialization: "Technical & Vocational Education"
    },
    {
      name: "Sindh Board of Technical Education",
      location: "Karachi", 
      specialization: "Technical Training Programs"
    },
    {
      name: "KPK Board of Technical Education",
      location: "Peshawar",
      specialization: "Commerce & Technical Education"
    },
    {
      name: "Balochistan Board of Technical Education",
      location: "Quetta",
      specialization: "Professional Training"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Official Verification",
      description: "Government-authenticated technical education certificates"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast attestation completed within 2-4 working days"
    },
    {
      icon: CheckCircle,
      title: "Industry Recognition",
      description: "Certificates accepted by employers and institutions globally"
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Ensuring technical education meets professional standards"
    }
  ];

  const faqs = [
    {
      question: "What is BTE and what does it cover?",
      answer: "The Board of Technical Education (BTE) oversees technical and vocational education in Pakistan. It covers technical diplomas, vocational training certificates, commerce education, and professional skill development programs."
    },
    {
      question: "How long does BTE attestation take?",
      answer: "BTE attestation typically takes 2-4 working days, depending on the type of certificate and the specific board involved. Express services may be available for urgent requirements."
    },
    {
      question: "Which provincial boards handle BTE attestation?",
      answer: "Each province has its own BTE board: Punjab (Lahore), Sindh (Karachi), KPK (Peshawar), and Balochistan (Quetta). We handle attestation from all provincial boards."
    },
    {
      question: "Do I need BTE attestation for employment abroad?",
      answer: "Yes, most international employers and institutions require BTE attestation for Pakistani technical education certificates to verify their authenticity and educational standards."
    },
    {
      question: "What documents are required for BTE attestation?",
      answer: "You'll need the original certificate or attested copy, CNIC copy, passport copy (for international use), completed application form, and processing fee payment."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              <Award className="w-4 h-4 mr-2" />
              BTE Attestation Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              BTE Technical Education <span className="text-gradient-light">Attestation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Official Board of Technical Education attestation for technical, vocational, and commerce certificates. 
              Recognized by employers and institutions worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="btn-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
              </Link>
              <Button size="lg" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">2-4</div>
                <div className="text-sm text-primary-foreground/80">Working Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">4</div>
                <div className="text-sm text-primary-foreground/80">Provincial Boards</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25K+</div>
                <div className="text-sm text-primary-foreground/80">Certificates Attested</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About BTE Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-gradient">BTE Attestation</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Board of Technical Education in Pakistan operates under the Ministry of Education, 
                responsible for overseeing technical and vocational education across the country. 
                It ensures quality standards and accreditation for various technical institutions.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                To serve the diverse regions of Pakistan effectively, BTE is divided into provincial 
                and regional boards, each handling specific geographical areas and educational programs 
                tailored to local industry needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Settings className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-xl font-bold">BTE Coverage</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Time:</span>
                      <span className="font-semibold text-accent">2-4 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Provincial Boards:</span>
                      <span className="font-semibold">4 Major Boards</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Document Types:</span>
                      <span className="font-semibold">6+ Categories</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Success Rate:</span>
                      <span className="font-semibold text-accent">100%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Provincial Boards Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Provincial <span className="text-gradient">BTE Boards</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We handle attestation from all major provincial boards across Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {boards.map((board, index) => (
              <Card key={index} className="card-elevated hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Building2 className="w-8 h-8 text-accent mr-3" />
                    <div>
                      <h3 className="font-bold text-sm">{board.name}</h3>
                      <p className="text-xs text-muted-foreground">{board.location}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{board.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Documents We <span className="text-gradient">Attest</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete BTE attestation services for all types of technical and vocational education documents
            </p>
          </div>

          <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Wrench className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-bold">Technical Education Documents</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about BTE attestation services
            </p>
          </div>
          
          <FAQ />
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your BTE <span className="text-gradient">Attestation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today for professional BTE attestation services
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
      <ScrollToTop />
    </div>
  );
};

export default BtePage;