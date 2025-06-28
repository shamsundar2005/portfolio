
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email && formData.subject && formData.message;

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate or have a question? I'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background border-border resize-none"
                />
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white font-semibold py-6 text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always interested in new opportunities, collaborations, and connecting with fellow developers. 
                    Whether you have a project in mind, want to discuss technology, or just say hello, feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Contact Information</h4>
                      <p className="text-muted-foreground text-sm">📧 shamsundarak2005@gmail.com</p>
                      <p className="text-muted-foreground text-sm">📱 +91 9944102264</p>
                      <p className="text-muted-foreground text-sm">📍 Tamil Nadu, India</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Response Time</h4>
                      <p className="text-muted-foreground text-sm">Usually within 24 hours</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Best For</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• AI/ML project collaborations</li>
                        <li>• Full-stack development opportunities</li>
                        <li>• Technical consultations</li>
                        <li>• Research collaborations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-primary">Social Media</h3>
                
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open('https://linkedin.com/in/linkedin-sham-sundar', '_blank')}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 hover:bg-primary/10 transition-all duration-300"
                    onClick={() => window.open('https://github.com/shamsundar2005', '_blank')}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
