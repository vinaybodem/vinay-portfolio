import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration
  const SERVICE_ID = 'service_dr4sxcg';
  const TEMPLATE_ID = 'template_bz4nni9';
  const PUBLIC_KEY = 'IfrXgGXt0hM1sUUaz';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'bodemvinay@gmail.com'
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-accent mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a conversation about technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply chat about the latest in AI and technology. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 text-primary rounded-full">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a 
                    href="mailto:bodemvinay@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    bodemvinay@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent/20 text-accent rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <a 
                    href="tel:+919642121777" 
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 9642121777
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 text-primary rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <span className="text-muted-foreground">Rajahmundry, India</span>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-surface-elevated border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-lift"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-surface-elevated border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-lift"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="card-elevated p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-surface-elevated border-border"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-surface-elevated border-border"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-surface-elevated border-border resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;