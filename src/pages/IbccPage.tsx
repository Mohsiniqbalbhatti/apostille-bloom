import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileCheck, 
  Shield, 
  Clock, 
  CheckCircle,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Phone,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const IbccPage = () => {
  const documents = [
    "Matriculation Certificate (SSC)",
    "Intermediate Certificate (HSSC)", 
    "Diploma Certificates",
    "Technical Education Certificates",
    "Board Examination Transcripts",
    "Character Certificates from Educational Boards"
  ];

  const requirements = [
    "Original certificate or attested copy",
    "CNIC copy of the applicant",
    "Passport copy (if applying for abroad)",
    "Completed IBCC application form",
    "Processing fee payment proof"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Official Recognition",
      description: "Government-verified authentication for your educational documents"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick verification process completed within 3-5 working days"
    },
    {
      icon: CheckCircle,
      title: "Global Acceptance",
      description: "IBCC verified documents accepted worldwide for further education"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Ensuring educational standards and preventing document fraud"
    }
  ];

  const faqs = [
    {
      question: "What is IBCC and why is it important?",
      answer: "IBCC (Inter Board Committee of Chairmen) is the official body that verifies secondary education certificates in Pakistan. It ensures your educational documents meet national standards and are recognized for higher education admissions and employment."
    },
    {
      question: "How long does IBCC verification take?",
      answer: "IBCC verification typically takes 3-5 working days. However, processing time may vary depending on the type of document and current workload at IBCC offices."
    },
    {
      question: "Which documents can be verified through IBCC?",
      answer: "IBCC verifies SSC (Matriculation), HSSC (Intermediate), diploma certificates, technical education certificates, and other secondary education documents issued by Pakistani education boards."
    },
    {
      question: "Is IBCC verification mandatory for studying abroad?",
      answer: "Yes, most international universities and institutions require IBCC verification for Pakistani secondary education certificates as part of their admission process."
    },
    {
      question: "What is the difference between IBCC and HEC attestation?",
      answer: "IBCC handles secondary education certificates (up to intermediate level), while HEC (Higher Education Commission) handles university degrees and higher education documents."
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
              <FileCheck className="w-4 h-4 mr-2" />
              IBCC Verification Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IBCC Document <span className="text-gradient-light">Verification</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Official Inter Board Committee of Chairmen verification for secondary education certificates. 
              Trusted by students and professionals for global recognition.
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
                <div className="text-3xl font-bold text-accent">3-5</div>
                <div className="text-sm text-primary-foreground/80">Working Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50K+</div>
                <div className="text-sm text-primary-foreground/80">Documents Verified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About IBCC Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="text-gradient">IBCC Verification</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Inter Board Committee of Chairmen (IBCC), restructured in April 2023 under the IBCC Act, 
                operates under the Ministry of Federal Education and Professional Training. It plays a vital role 
                in enhancing standards of secondary and higher education across Pakistan.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Originally established in 1972, IBCC unites examination board heads from across the country, 
                collaborating with local and international institutions to develop standardized policies for 
                academic assessments and evaluations.
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
                    <GraduationCap className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-xl font-bold">IBCC at a Glance</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Established:</span>
                      <span className="font-semibold">1972</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Restructured:</span>
                      <span className="font-semibold">April 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Ministry:</span>
                      <span className="font-semibold">MoFE&PT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Time:</span>
                      <span className="font-semibold text-accent">3-5 Days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Documents We <span className="text-gradient">Verify</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete IBCC verification services for all types of secondary education documents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-bold">Documents Covered</h3>
                </div>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-bold">Required Documents</h3>
                </div>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about IBCC verification services
            </p>
          </div>
          
          <FAQ />
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your IBCC <span className="text-gradient">Verification</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today for fast and reliable IBCC verification services
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IbccPage;