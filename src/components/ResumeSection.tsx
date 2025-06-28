
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ResumeSection = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Placeholder URL - to be replaced with actual resume link
    const resumeUrl = 'https://yourwebsite.com/shamsundark_resume.pdf';
    
    toast({
      title: "Resume Download",
      description: "This is a placeholder link. Please replace with the actual resume URL.",
    });
    
    // Uncomment when actual resume URL is available
    // window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my complete professional resume with detailed experience and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-hover animate-scale-in">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-primary">Sham Sundar K - Resume</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  Get the complete overview of my professional journey in AI/ML and full-stack development, 
                  technical skills, project experience, and educational background in a comprehensive PDF format.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="p-6 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">What's Included</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complete work experience</li>
                    <li>• AI/ML project portfolio</li>
                    <li>• Technical skill matrix</li>
                    <li>• Education & certifications</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Format Details</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• PDF format</li>
                    <li>• ATS-friendly design</li>
                    <li>• Professional layout</li>
                    <li>• Print-ready quality</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-secondary/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">Updated</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• January 2025</li>
                    <li>• Latest AI/ML projects</li>
                    <li>• Current experience</li>
                    <li>• Recent achievements</li>
                  </ul>
                </div>
              </div>

              <Button
                size="lg"
                onClick={handleDownload}
                className="bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <FileText className="w-6 h-6 mr-3" />
                Download Resume PDF
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                Updated January 2025 • PDF Format • <span className="text-accent">Placeholder Link</span>
              </p>
              
              <p className="text-xs text-muted-foreground mt-2">
                Note: This is a placeholder. Please replace the URL with the actual resume link.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
