import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Shield, 
  Clock, 
  CheckCircle,
  Globe,
  Flag,
  Users,
  Building2,
  Phone,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const EmbassyPage = () => {
  const countries = [
    {
      name: "UAE Embassy",
      flag: "🇦🇪",
      processingTime: "5-7 days",
      documents: ["Educational", "Commercial", "Personal"]
    },
    {
      name: "Saudi Arabia Embassy", 
      flag: "🇸🇦",
      processingTime: "7-10 days",
      documents: ["Religious", "Educational", "Commercial"]
    },
    {
      name: "UK Embassy",
      flag: "🇬🇧", 
      processingTime: "10-14 days",
      documents: ["Educational", "Legal", "Commercial"]
    },
    {
      name: "USA Embassy",
      flag: "🇺🇸",
      processingTime: "14-21 days", 
      documents: ["Educational", "Legal", "Personal"]
    },
    {
      name: "Canada Embassy",
      flag: "🇨🇦",
      processingTime: "10-15 days",
      documents: ["Educational", "Immigration", "Commercial"]
    },
    {
      name: "Australia Embassy",
      flag: "🇦🇺",
      processingTime: "12-18 days",
      documents: ["Educational", "Immigration", "Legal"]
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "Document Authentication",
      description: "Official embassy stamps and seals for international recognition"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Embassy services for 105+ countries worldwide"
    },
    {
      icon: Users,
      title: "Expert Handling",
      description: "Experienced team familiar with embassy requirements"
    },
    {
      icon: Clock,
      title: "Timely Processing",
      description: "Efficient processing within embassy timeframes"
    }
  ];

  const documentTypes = [
    "Educational Certificates & Degrees",
    "Commercial Documents & Trade Licenses", 
    "Personal Documents (Birth, Marriage, Death)",
    "Legal Documents & Power of Attorney",
    "Medical Certificates & Reports",
    "Police Character Certificates"
  ];

  const faqs = [
    {
      question: "What is embassy attestation and why is it required?",
      answer: "Embassy attestation is the final step in document legalization where the destination country's embassy in Pakistan verifies your documents. It's required for international recognition of Pakistani documents abroad."
    },
    {
      question: "How long does embassy attestation take?",
      answer: "Processing time varies by embassy: UAE (5-7 days), Saudi Arabia (7-10 days), UK (10-14 days), USA (14-21 days). Times may vary based on embassy workload and document type."
    },
    {
      question: "Do I need MOFA attestation before embassy attestation?",
      answer: "Yes, most embassies require documents to be first attested by MOFA (Ministry of Foreign Affairs) before they can provide embassy attestation. This is a standard requirement."
    },
    {
      question: "Can you handle embassy attestation for any country?",
      answer: "We provide embassy attestation services for 105+ countries. Each embassy has specific requirements, and our team is familiar with the procedures for all major embassies in Pakistan."
    },
    {
      question: "What documents are required for embassy attestation?",
      answer: "You'll need the original document (already MOFA attested), passport copy, CNIC copy, embassy application form, and processing fee. Some embassies may require additional documents."
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
              <MapPin className="w-4 h-4 mr-2" />
              Embassy Attestation Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Worldwide Embassy <span className="text-gradient-light">Attestation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Professional embassy attestation services for 105+ countries. Your trusted expert 
              for global document legalization with embassy stamps and certifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="btn-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Started Today
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10">
                View Countries
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">105+</div>
                <div className="text-sm text-primary-foreground/80">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">15+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">75K+</div>
                <div className="text-sm text-primary-foreground/80">Documents Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Embassy Services */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional <span className="text-gradient">Embassy Services</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Apostille Embassy Documents, we provide quick and dependable services to get your 
                documents apostilled for international use. Our expert team handles embassy document 
                attestation with precision and efficiency.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Whether you need MOFA attestation or embassy certification, we ensure your documents 
                are processed smoothly. Trust us for certified apostille services that comply with 
                all legal requirements for hassle-free document legalization.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Globe className="w-8 h-8 text-accent mr-3" />
                    <h3 className="text-xl font-bold">Global Reach</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Countries Served:</span>
                      <span className="font-semibold text-accent">105+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Major Embassies:</span>
                      <span className="font-semibold">20+ Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Processing Range:</span>
                      <span className="font-semibold">5-21 Days</span>
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

      {/* Popular Countries */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Popular <span className="text-gradient">Embassy Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fast and reliable embassy attestation for the most requested destinations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((country, index) => (
              <Card key={index} className="card-elevated hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{country.flag}</div>
                    <div>
                      <h3 className="font-bold">{country.name}</h3>
                      <p className="text-sm text-muted-foreground">Processing: {country.processingTime}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {country.documents.map((doc, docIndex) => (
                      <Badge key={docIndex} variant="secondary" className="text-xs">
                        {doc}
                      </Badge>
                    ))}
                  </div>
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
              Documents We <span className="text-gradient">Handle</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete embassy attestation services for all types of documents
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Flag className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-bold">Embassy Attestation Documents</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {documentTypes.map((doc, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps />

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about embassy attestation services
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
              Start Your Embassy <span className="text-gradient">Attestation</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today for professional embassy attestation services
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmbassyPage;