import { FileText, Upload, CheckCircle, Download } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      step: '01',
      title: 'Submit Documents',
      description: 'Upload your documents securely through our online portal or visit our office.',
      icon: Upload,
      color: 'from-primary to-primary-light'
    },
    {
      step: '02', 
      title: 'Verification Process',
      description: 'Our experts verify your documents with relevant authorities (HEC, MOFA, IBCC, BTE).',
      icon: FileText,
      color: 'from-accent to-accent-light'
    },
    {
      step: '03',
      title: 'Quality Check',
      description: 'Multiple quality checks ensure accuracy and completeness of attestation.',
      icon: CheckCircle,
      color: 'from-primary-light to-accent'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Receive your attested documents through secure delivery or collection.',
      icon: Download,
      color: 'from-accent-light to-primary'
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our streamlined 4-step process ensures quick, secure, and reliable document attestation
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group animate-fade-in"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {/* Step Card */}
                <div className="card-elevated text-center p-8 relative z-10 group-hover:scale-105 transition-all duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl mx-auto mb-6 mt-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-b from-accent to-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="card-elevated p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who trust us with their document attestation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Application
              </button>
              <button className="btn-outline">
                Download Checklist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;