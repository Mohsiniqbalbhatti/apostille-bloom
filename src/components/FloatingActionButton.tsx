import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Download, ChevronUp, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface FloatingActionButtonProps {
  onContactClick?: () => void;
  onDownloadClick?: () => void;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onContactClick,
  onDownloadClick
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Menu */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 mb-4">
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden">
            <CardContent className="p-2">
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left hover:bg-accent/10 rounded-xl h-12 px-4"
                  onClick={() => {
                    onContactClick?.();
                    setIsExpanded(false);
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-700">Live Chat</span>
                  </div>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left hover:bg-accent/10 rounded-xl h-12 px-4"
                  onClick={() => {
                    window.open('tel:+92-XXX-XXXXXXX');
                    setIsExpanded(false);
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-700">Call Now</span>
                  </div>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left hover:bg-accent/10 rounded-xl h-12 px-4"
                  onClick={() => {
                    window.open('mailto:info@apostillebloom.com');
                    setIsExpanded(false);
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-700">Email Us</span>
                  </div>
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-left hover:bg-accent/10 rounded-xl h-12 px-4"
                  onClick={() => {
                    onDownloadClick?.();
                    setIsExpanded(false);
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                      <Download className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="font-medium text-gray-700">Download Guide</span>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main FAB Container */}
      <div className="flex flex-col items-end space-y-3">
        {/* Scroll to Top Button */}
        <Button
          size="sm"
          className="rounded-full w-12 h-12 bg-primary/90 hover:bg-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          onClick={scrollToTop}
        >
          <ChevronUp className="w-5 h-5" />
        </Button>

        {/* Main Action Button */}
        <Button
          size="lg"
          className={`rounded-full w-16 h-16 bg-gradient-to-r from-accent to-primary text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
            isExpanded ? 'rotate-45' : 'rotate-0'
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <HelpCircle className="w-7 h-7" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActionButton;
