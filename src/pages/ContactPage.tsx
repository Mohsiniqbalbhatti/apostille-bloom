import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const offices = [
    {
      city: 'Islamabad',
      address: 'G-11 Markaz, Islamabad Capital Territory',
      phone: '+92-51-XXXXXXX',
      email: 'islamabad@apostillemofa.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
    },
    {
      city: 'Lahore',
      address: 'Gulberg III, Lahore, Punjab',
      phone: '+92-42-XXXXXXX', 
      email: 'lahore@apostillemofa.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
    },
    {
      city: 'Karachi',
      address: 'Clifton Block 2, Karachi, Sindh',
      phone: '+92-21-XXXXXXX',
      email: 'karachi@apostillemofa.com', 
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Contact Our Attestation Experts
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Get professional guidance for your document attestation needs. 
                We're here to help with HEC, MOFA, IBCC, BTE, and Embassy services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-light" />
                  <span>+92-XXX-XXXXXXX</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-light" />
                  <span>info@apostillemofa.com</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-accent-light" />
                  <span>Live Chat Available</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Office Locations */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-gradient">Office Locations</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Visit us at any of our convenient locations across Pakistan for in-person assistance
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="card-elevated p-8 text-center hover:scale-105 transition-transform">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto mb-6 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-primary">{office.city}</h3>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{office.email}</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{office.hours}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 btn-outline">
                    Get Directions
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <div className="card-elevated p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Need Urgent Assistance?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                For emergency document attestation services or urgent queries, 
                contact our dedicated helpline available 24/7.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Emergency Hotline</h3>
                  <p className="text-muted-foreground">+92-XXX-EMERGENCY</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground">Available 24/7</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-light to-accent-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Priority Email</h3>
                  <p className="text-muted-foreground">urgent@apostillemofa.com</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Start Live Chat
                </button>
                <button className="btn-accent">
                  Call Emergency Line
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;