import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMofaDropdownOpen, setIsMofaDropdownOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'HEC', href: '/hec' },
    { name: 'IBCC', href: '/ibcc' },
    { name: 'BTE', href: '/bte' },
    { name: 'Embassy', href: '/embassy' },
    { name: 'Translation', href: '/translation' },
    { name: 'Contact', href: '/contact' },
  ];

  const mofaItems = [
    { name: 'MOFA Attestation', href: '/mofa' },
    { name: 'MOFA Apostille', href: '/mofa-apostille' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isMofaActive = () => location.pathname === '/mofa' || location.pathname === '/mofa-apostille';

  return (
    <header className="bg-card/95 backdrop-blur-md border-b border-card-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">MOFA Apostille</h1>
              <p className="text-xs text-muted-foreground">Pakistan</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.slice(0, 2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* MOFA Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMofaDropdownOpen(!isMofaDropdownOpen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center ${
                  isMofaActive()
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary hover:text-primary'
                }`}
              >
                MOFA
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isMofaDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMofaDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-card border border-card-border rounded-lg shadow-lg z-50">
                  {mofaItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsMofaDropdownOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium transition-all duration-200 first:rounded-t-lg last:rounded-b-lg ${
                        isActive(item.href)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-secondary hover:text-primary'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navigationItems.slice(2).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden md:flex btn-accent">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-card-border bg-card">
            <nav className="py-4 space-y-2">
              {navigationItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* MOFA Mobile Dropdown */}
              <div>
                <button
                  onClick={() => setIsMofaDropdownOpen(!isMofaDropdownOpen)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                    isMofaActive()
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary hover:text-primary'
                  }`}
                >
                  MOFA
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMofaDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMofaDropdownOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {mofaItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMofaDropdownOpen(false);
                        }}
                        className={`block px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                          isActive(item.href)
                            ? 'bg-primary text-primary-foreground'
                            : 'text-muted-foreground hover:bg-secondary hover:text-primary'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navigationItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-4 pt-4">
                <Button className="w-full btn-accent">
                  <Phone className="w-4 h-4 mr-2" />
                  Get Quote Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;