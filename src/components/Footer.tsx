
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-2">Sham Sundar K</h3>
            <p className="text-muted-foreground">
              Full Stack Developer & Machine Learning Engineer crafting innovative digital experiences 
              through cutting-edge AI and web technologies.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-4 mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://linkedin.com/in/linkedin-sham-sundar', '_blank')}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open('https://github.com/shamsundar2005', '_blank')}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </Button>
            </div>
            
            <Button
              variant="ghost"
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to Top ↑
            </Button>
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sham Sundar K. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
