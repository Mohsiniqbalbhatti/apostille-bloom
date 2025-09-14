const CountryFlagsMarquee = () => {
  const countries = [
    { name: 'UAE', flag: '🇦🇪', code: 'AE' },
    { name: 'Saudi Arabia', flag: '🇸🇦', code: 'SA' },
    { name: 'Qatar', flag: '🇶🇦', code: 'QA' },
    { name: 'Kuwait', flag: '🇰🇼', code: 'KW' },
    { name: 'Bahrain', flag: '🇧🇭', code: 'BH' },
    { name: 'Oman', flag: '🇴🇲', code: 'OM' },
    { name: 'USA', flag: '🇺🇸', code: 'US' },
    { name: 'UK', flag: '🇬🇧', code: 'GB' },
    { name: 'Canada', flag: '🇨🇦', code: 'CA' },
    { name: 'Australia', flag: '🇦🇺', code: 'AU' },
    { name: 'Germany', flag: '🇩🇪', code: 'DE' },
    { name: 'France', flag: '🇫🇷', code: 'FR' },
    { name: 'Italy', flag: '🇮🇹', code: 'IT' },
    { name: 'Spain', flag: '🇪🇸', code: 'ES' },
    { name: 'Netherlands', flag: '🇳🇱', code: 'NL' },
    { name: 'Belgium', flag: '🇧🇪', code: 'BE' },
    { name: 'Malaysia', flag: '🇲🇾', code: 'MY' },
    { name: 'Singapore', flag: '🇸🇬', code: 'SG' },
    { name: 'Japan', flag: '🇯🇵', code: 'JP' },
    { name: 'South Korea', flag: '🇰🇷', code: 'KR' }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-secondary/50 to-accent/10 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            We Serve <span className="text-accent">150+ Countries</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our MOFA attestation services are recognized globally. Get your documents attested for any of these countries and more.
          </p>
        </div>
      </div>
      
      <div className="relative">
        {/* First Row - Left to Right */}
        <div className="flex animate-marquee-left whitespace-nowrap mb-6">
          {countries.slice(0, 10).map((country, index) => (
            <div key={index} className="flex items-center bg-card/80 backdrop-blur-sm rounded-lg px-4 py-3 mx-3 border border-card-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-3xl mr-3">{country.flag}</span>
              <div>
                <p className="font-semibold text-foreground text-sm">{country.name}</p>
                <p className="text-xs text-muted-foreground">Embassy Services</p>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {countries.slice(0, 10).map((country, index) => (
            <div key={`dup1-${index}`} className="flex items-center bg-card/80 backdrop-blur-sm rounded-lg px-4 py-3 mx-3 border border-card-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-3xl mr-3">{country.flag}</span>
              <div>
                <p className="font-semibold text-foreground text-sm">{country.name}</p>
                <p className="text-xs text-muted-foreground">Embassy Services</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex animate-marquee-right whitespace-nowrap">
          {countries.slice(10, 20).map((country, index) => (
            <div key={index} className="flex items-center bg-card/80 backdrop-blur-sm rounded-lg px-4 py-3 mx-3 border border-card-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-3xl mr-3">{country.flag}</span>
              <div>
                <p className="font-semibold text-foreground text-sm">{country.name}</p>
                <p className="text-xs text-muted-foreground">MOFA Attestation</p>
              </div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {countries.slice(10, 20).map((country, index) => (
            <div key={`dup2-${index}`} className="flex items-center bg-card/80 backdrop-blur-sm rounded-lg px-4 py-3 mx-3 border border-card-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 flex-shrink-0">
              <span className="text-3xl mr-3">{country.flag}</span>
              <div>
                <p className="font-semibold text-foreground text-sm">{country.name}</p>
                <p className="text-xs text-muted-foreground">MOFA Attestation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryFlagsMarquee;