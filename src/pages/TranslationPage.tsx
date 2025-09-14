import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProcessSteps from "@/components/ProcessSteps";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Languages, 
  Shield, 
  Clock, 
  CheckCircle,
  FileText,
  Award,
  Users,
  Globe,
  Phone,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import FloatingActionButton from "@/components/FloatingActionButton";
import ScrollToTop from "@/components/ScrollToTop";

const TranslationPage = () => {
  const familyDocuments = [
    "Marriage Certificate",
    "Birth Certificate", 
    "Family Registration Certificate",
    "Police Character Certificate",
    "Power of Attorney",
    "Death Certificate",
    "Divorce Certificate"
  ];

  const academicDocuments = [
    "University Degrees",
    "Transcripts & Mark Sheets",
    "Diplomas & Certificates", 
    "School Certificates",
    "Professional Qualifications",
    "Training Certificates"
  ];

  const commercialDocuments = [
    "Trade Licenses",
    "Company Registration",
    "Financial Statements",
    "Contracts & Agreements",
    "Import/Export Documents",
    "Tax Certificates"
  ];

  const languages = [
    { name: "Arabic", flag: "🇸🇦", demand: "High" },
    { name: "English", flag: "🇺🇸", demand: "Very High" },
    { name: "French", flag: "🇫🇷", demand: "Medium" },
    { name: "German", flag: "🇩🇪", demand: "Medium" },
    { name: "Spanish", flag: "🇪🇸", demand: "Medium" },
    { name: "Chinese", flag: "🇨🇳", demand: "High" },
    { name: "Japanese", flag: "🇯🇵", demand: "Low" },
    { name: "Korean", flag: "🇰🇷", demand: "Low" },
    { name: "Russian", flag: "🇷🇺", demand: "Low" },
    { name: "Italian", flag: "🇮🇹", demand: "Low" },
    { name: "Dutch", flag: "🇳🇱", demand: "Low" },
    { name: "Portuguese", flag: "🇵🇹", demand: "Low" }
  ];

  const features = [
    {
      icon: Shield,
      title: "Certified Translation",
      description: "Official certified translations accepted by authorities worldwide"
    },
    {
      icon: Languages,
      title: "20+ Languages",
      description: "Professional translation services in over 20 major languages"
    },
    {
      icon: Award,
      title: "Expert Translators",
      description: "Native speakers and certified professionals with specialized expertise"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround time of 1-3 days for most documents"
    }
  ];

  const faqs = [
    {
      question: "What types of documents can you translate?",
      answer: "We translate all types of documents including family documents (marriage, birth certificates), academic documents (degrees, transcripts), commercial documents (trade licenses, contracts), and legal documents."
    },
    {
      question: "Are your translations officially certified?",
      answer: "Yes, all our translations are certified and officially accepted by embassies, universities, employers, and government authorities worldwide. We provide official certification stamps and seals."
    },
    {
      question: "How long does translation take?",
      answer: "Most documents are translated within 1-3 days. Complex documents or large volumes may take longer. We also offer express services for urgent requirements."
    },
    {
      question: "Which languages do you translate to/from?",
      answer: "We provide translation services in 20+ languages including English, Arabic, French, German, Spanish, Chinese, and many others. All translations are done by native speakers."
    },
    {
      question: "Do you translate from Urdu to other languages?",
      answer: "Yes, we specialize in translating from Urdu to all major international languages and vice versa. Our translators are experts in both Urdu and the target language."
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
              <Languages className="w-4 h-4 mr-2" />
              Professional Translation Services
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Certified Document <span className="text-gradient-light">Translation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Professional certified document translation services in 20+ languages. 
              Trusted by thousands for accurate, official translations accepted worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/contact">
                <Button size="lg" className="btn-accent">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote Today
                </Button>
              </Link>
              <Button size="lg" className="btn-outline border-2 border-white text-white hover:bg-white hover:text-primary">
                View Languages
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">20+</div>
                <div className="text-sm text-primary-foreground/80">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1-3</div>
                <div className="text-sm text-primary-foreground/80">Days Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100K+</div>
                <div className="text-sm text-primary-foreground/80">Documents Translated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Translation Services */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional <span className="text-gradient">Translation Services</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                MOFA Apostille Services, based in Islamabad, Pakistan, has been providing expert and 
                certified translation services since 1998. Years of incomparable service commitment 
                have established our reputation as an ideal service provider for several distinguished 
                organizations.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We have experienced agents with comprehensive expertise in legal translation services, 
                specializing in various types of MOFA translation services. Our innovative, accurate, 
                and cost-effective translation solutions are trusted by thousands of clients.
              </p>

              <div className="p-6 bg-secondary/30 rounded-lg mb-8">
                <h4 className="font-semibold text-lg mb-3 text-primary">Why Choose Our Translation Services?</h4>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>25+ Years Experience:</strong> Serving clients since 1998 with unmatched expertise</li>
                  <li>• <strong>Native Translators:</strong> All translations done by native speakers of target languages</li>
                  <li>• <strong>Official Certification:</strong> Certified translations accepted by all embassies and authorities</li>
                  <li>• <strong>Quality Assurance:</strong> Multi-tier review process ensuring 99.9% accuracy</li>
                  <li>• <strong>Express Service:</strong> Same-day translation available for urgent requirements</li>
                  <li>• <strong>Confidential:</strong> Strict confidentiality maintained for all documents</li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                    <h3 className="text-xl font-bold">Translation Stats</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Languages Offered:</span>
                      <span className="font-semibold text-accent">20+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Since:</span>
                      <span className="font-semibold">1998</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Time:</span>
                      <span className="font-semibold">1-3 Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Accuracy Rate:</span>
                      <span className="font-semibold text-accent">99.9%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Languages</span> We Translate
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional translation services in major international languages
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((lang, index) => (
              <Card key={index} className="card-elevated hover:scale-105 transition-transform duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">{lang.flag}</span>
                      <span className="font-semibold">{lang.name}</span>
                    </div>
                    <Badge 
                      variant={lang.demand === "Very High" ? "default" : lang.demand === "High" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {lang.demand}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Document <span className="text-gradient">Categories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We translate all types of official documents with certified accuracy
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Family Documents */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-bold">Family Documents</h3>
                </div>
                <ul className="space-y-3">
                  {familyDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Academic Documents */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-bold">Academic Documents</h3>
                </div>
                <ul className="space-y-3">
                  {academicDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Commercial Documents */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-xl font-bold">Commercial Documents</h3>
                </div>
                <ul className="space-y-3">
                  {commercialDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">{doc}</span>
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
      <section className="section-padding bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our translation services
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
              Get Your Documents <span className="text-gradient">Translated</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today for professional certified translation services
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

export default TranslationPage;