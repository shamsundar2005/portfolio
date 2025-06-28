
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Paper Presentation Winner - 1st Prize",
      description: "Won 1st prize for the presentation of a paper on multiple disease prediction using machine learning techniques. The research focused on developing an accurate and efficient system for early disease detection.",
      date: "2024",
      impact: "Contributed to advancing healthcare technology through innovative ML solutions"
    },
    {
      title: "24 Hour Hackathon Winner - 2nd Place",
      description: "Achieved 2nd place in a 24-hour hackathon, demonstrating exceptional problem-solving skills and innovation under pressure. Developed a complete solution from concept to implementation in a single day.",
      date: "2024",
      impact: "Showcased ability to rapidly prototype and deliver functional solutions"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Achievements & Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milestones and recognition that highlight my commitment to excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-teal-500/20 rounded-full flex-shrink-0">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 text-primary">{achievement.title}</h3>
                      <p className="text-sm text-accent font-semibold">{achievement.date}</p>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                    
                    <div className="p-3 bg-secondary/50 rounded-lg">
                      <p className="text-sm font-medium">
                        <span className="text-accent">Impact: </span>
                        {achievement.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
