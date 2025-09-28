import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  city: z.string().min(2, 'Please enter your city'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const services = [
    'HEC Attestation',
    'MOFA Attestation', 
    'MOFA Apsotille',
    'IBCC Verification',
    'BTE Attestation',
    'Embassy Services',
    'Translation Services',
    'Multiple Services'
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll contact you within 24 hours to discuss your requirements.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@adamsconsultant.com', 'mailsi@adamsconsultant.com'],
      color: 'from-accent to-accent-light'
    },
    {
      icon: MapPin,
      title: 'Offices',
      details: [
        { branch: 'Head Office Lahore', address: 'Office # 7, 7th Floor, Liberty gate plaza, MM Alam Road, Gulberg 3 Lahore', phone: '+92 325 7590012' },
        { branch: 'Mailsi Branch', address: 'Main Multan Road, Opposite Decent Bakers, Mailsi, 61200', phone: '+92 313 7995726' }
      ],
      color: 'from-primary-light to-accent'
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Your <span className="text-gradient">Free Quote</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Submit your requirements and get a personalized quote within 24 hours
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Get in touch with our attestation experts for immediate assistance
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                    {info.title === 'Offices' ? (
                      info.details.map((office, idx) => (
                        <div key={idx} className="mb-4 last:mb-0">
                          <div className="font-bold text-primary mb-1">{office.branch}</div>
                          <p className="text-muted-foreground text-sm mb-1">
                            {office.address}
                          </p>
                          {office.phone && (
                            <p className="text-muted-foreground text-sm font-medium">
                              {office.phone}
                            </p>
                          )}
                        </div>
                      ))
                    ) : (
                      info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}

              {/* Office Hours */}
              <div className="card-elevated p-6 mt-8">
                <h4 className="font-semibold text-lg mb-4">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Saturday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="card-elevated p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        {...register('name')}
                        placeholder="Enter your full name"
                        className={errors.name ? 'border-destructive' : ''}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-2">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="your@email.com"
                        className={errors.email ? 'border-destructive' : ''}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-2">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        {...register('phone')}
                        placeholder="+92-XXX-XXXXXXX"
                        className={errors.phone ? 'border-destructive' : ''}
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-2">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Current City *
                      </label>
                      <Input
                        {...register('city')}
                        placeholder="Enter your city"
                        className={errors.city ? 'border-destructive' : ''}
                      />
                      {errors.city && (
                        <p className="text-destructive text-sm mt-2">
                          {errors.city.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Required Service *
                    </label>
                    <Select onValueChange={(value) => setValue('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the service you need" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Please describe your requirements, documents you need attested, and any specific questions..."
                      className={errors.message ? 'border-destructive' : ''}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full btn-primary"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll respond within 24 hours with a detailed quote and next steps
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
