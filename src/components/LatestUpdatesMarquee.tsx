import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

const LatestUpdatesMarquee = () => {
  const updates = [
    {
      icon: CheckCircle,
      text: "New: UAE Embassy attestation now available in 24 hours",
      type: "success"
    },
    {
      icon: Clock,
      text: "Processing time reduced for MOFA attestation - Now 2-3 days",
      type: "info"
    },
    {
      icon: AlertCircle,
      text: "Important: New document requirements for Saudi Embassy",
      type: "warning"
    },
    {
      icon: CheckCircle,
      text: "UK Embassy services now accepting online applications",
      type: "success"
    },
    {
      icon: Clock,
      text: "HEC degree attestation - Express service in 24 hours",
      type: "info"
    }
  ];

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {updates.map((update, index) => (
          <div key={index} className="flex items-center mx-8 flex-shrink-0">
            <update.icon className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm font-medium">{update.text}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {updates.map((update, index) => (
          <div key={`dup-${index}`} className="flex items-center mx-8 flex-shrink-0">
            <update.icon className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm font-medium">{update.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdatesMarquee;