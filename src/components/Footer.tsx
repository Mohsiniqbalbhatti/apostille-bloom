import { Link } from 'react-router-dom';
import { 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram 
} from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ];

  const services = [
    { name: 'HEC Attestation', href: '/hec' },
    { name: 'MOFA Attestation', href: '/mofa' },
    { name: 'MOFA Apostille', href: '/mofa-apostille' },
    { name: 'IBCC Verification', href: '/ibcc' },
    { name: 'BTE Attestation', href: '/bte' },
    { name: 'Embassy Services', href: '/embassy' },
    { name: 'Translation', href: '/translation' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refunds' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/adamsconsultants', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/adams.consultants', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/adams-consultants-a93185343/', icon: Linkedin },
    { name: 'TikTok', href: 'https://www.tiktok.com/@adams_consultants', icon: TikTokIcon },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">MOFA Apostille</h3>
                <p className="text-sm text-primary-foreground/80">Pakistan</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for professional document attestation services. We provide fast, secure, and reliable HEC, MOFA Attestation, MOFA Apostille, IBCC, BTE, and Embassy attestation services across Pakistan.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">+92 325 7590012</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">info@adamsconsultant.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">Gulberg 3, Lahore</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Follow us for updates on attestation services and important announcements.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Operating Hours */}
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <h5 className="font-semibold mb-3">Office Hours</h5>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Sat:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} MOFA Apostille Pakistan. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-accent text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
