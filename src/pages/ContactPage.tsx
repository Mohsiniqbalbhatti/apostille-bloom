import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const offices = [
    {
      city: 'Lahore Head Office',
      address: 'Office # 7, 7th Floor, Liberty gate plaza, MM Alam Road, Gulberg 3 Lahore',
      phone: '+92 325 7590012',
      email: 'info@adamsconsultant.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
    },
    {
      city: 'Mailsi Branch',
      address: 'Main Multan Road, Opposite Decent Bakers, Mailsi, 61200',
      phone: '+92 313 7995726', 
      email: 'mailsi@adamsconsultant.com',
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
                  <span>+92 325 7590012</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-light" />
                  <span>info@adamsconsultant.com</span>
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
              <p className="text-xl text-muted-foreground">
                Visit us at any of our convenient locations across Pakistan for in-person assistance
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div key={index} className={`card-elevated p-8 text-center hover:scale-105 transition-transform relative ${
                  office.city.includes('Head Office') ? 'lg:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20' : ''
                }`}>
                  {office.city.includes('Head Office') && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        HEAD OFFICE
                      </span>
                    </div>
                  )}
                  
                  <div className={`mx-auto mb-6 flex items-center justify-center rounded-xl ${
                    office.city.includes('Head Office') 
                      ? 'w-20 h-20 bg-gradient-to-br from-primary to-accent shadow-lg' 
                      : 'w-16 h-16 bg-gradient-to-br from-primary to-accent'
                  }`}>
                    <MapPin className={office.city.includes('Head Office') ? 'w-10 h-10 text-white' : 'w-8 h-8 text-white'} />
                  </div>
                  
                  <h3 className={`font-bold mb-4 text-primary ${
                    office.city.includes('Head Office') ? 'text-3xl' : 'text-2xl'
                  }`}>{office.city}</h3>
                  
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
                  
                  <button 
                    className="w-full mt-6 btn-outline"
                    onClick={() => window.open(office.city === 'Lahore Head Office' ? 'https://maps.app.goo.gl/BxSn41ZUhH1vDB4h9' : 'https://maps.app.goo.gl/q9uoBPSVJhTwpArd9', '_blank')}
                  >
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
            <div className="card-elevated p-12 text-center">
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
                   <p className="text-muted-foreground">+92 325 7590012</p>
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
                   <p className="text-muted-foreground">info@adamsconsultant.com</p>
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