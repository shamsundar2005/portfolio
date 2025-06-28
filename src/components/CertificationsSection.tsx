
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      name: "MongoDB Associate Developer",
      issuer: "MongoDB Inc.",
      date: "December 2024",
      credentialId: "MDB-AD-2024-SK001",
      description: "Demonstrates proficiency in MongoDB database design, development, and administration including document modeling, indexing, and aggregation pipelines"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional credentials that validate my technical expertise and commitment to continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto justify-center">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="card-hover animate-scale-in h-full mx-auto"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-tight mb-2">{cert.name}</h3>
                    <p className="text-primary font-semibold text-sm">{cert.issuer}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Issued:</span>
                    <span className="font-semibold">{cert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">ID:</span>
                    <span className="font-mono text-xs text-accent">{cert.credentialId}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Currently pursuing additional certifications in AI and Machine Learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
