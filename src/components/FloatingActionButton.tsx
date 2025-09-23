import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923257590012?text=Hello, I need help with document attestation services"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative"
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:scale-110 transition-all duration-300 p-0"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            WhatsApp Chat
          </div>
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+923257590012"
        className="group relative"
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 p-0"
        >
          <Phone className="w-6 h-6" />
        </Button>
        <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Call Now
          </div>
        </div>
      </a>
    </div>
  );
};

export default FloatingActionButton;
