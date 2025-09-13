import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "What is the difference between HEC and MOFA attestation?",
      answer: "HEC attestation is the first step for educational documents, verifying them with the Higher Education Commission. MOFA attestation comes after HEC attestation and certifies documents with the Ministry of Foreign Affairs for international use. Both are typically required for overseas education or employment."
    },
    {
      question: "How long does the document attestation process take?",
      answer: "Processing times vary by service: HEC attestation takes 24-48 hours, MOFA attestation takes 2-3 days, IBCC verification takes 3-5 days, and Embassy services take 5-7 days. We provide expedited services for urgent requirements."
    },
    {
      question: "Can I submit documents from outside Pakistan?",
      answer: "Yes, we accept documents through courier services and authorized representatives. We also provide guidance for overseas Pakistani nationals on document submission procedures and requirements."
    },
    {
      question: "What documents are required for attestation?",
      answer: "Required documents vary by service but typically include original certificates, transcripts, CNIC copy, and passport copy. We provide a detailed checklist for each service type when you contact us."
    },
    {
      question: "Is my document safe during the attestation process?",
      answer: "Absolutely. We maintain strict security protocols, provide tracking systems, and ensure all documents are handled by trained professionals. We also offer insurance coverage for valuable documents."
    },
    {
      question: "Do you provide translation services?",
      answer: "Yes, we offer certified translation services in 20+ languages. Our translations are officially recognized and accepted by embassies, universities, and government institutions worldwide."
    },
    {
      question: "What if my document is rejected during attestation?",
      answer: "If a document is rejected, we provide detailed feedback on the reasons and guide you on the corrective steps needed. We also offer document rectification services to address common issues."
    },
    {
      question: "Can I track the status of my attestation application?",
      answer: "Yes, we provide a tracking system where you can monitor your application status in real-time. You'll receive SMS and email updates at each stage of the process."
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get answers to common questions about our document attestation services
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="card-elevated overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-secondary/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6 border-t border-card-border">
                    <p className="text-muted-foreground leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-lg text-muted-foreground mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Our Experts
              </button>
              <button className="btn-outline">
                Live Chat Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FAQ;