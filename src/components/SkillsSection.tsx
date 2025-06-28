
import { Award, Github, Linkedin, Smartphone, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const technicalSkills = [
    { name: 'Python', icon: '🐍', category: 'Languages' },
    { name: 'JavaScript', icon: '🟨', category: 'Languages' },
    { name: 'C', icon: '🔤', category: 'Languages' },
    { name: 'Java', icon: '☕', category: 'Languages' },
    { name: 'Flask', icon: '🌶️', category: 'Frameworks' },
    { name: 'TensorFlow', icon: '🧠', category: 'Machine Learning' },
    { name: 'PyTorch', icon: '🔥', category: 'Machine Learning' },
    { name: 'Keras', icon: '🤖', category: 'Machine Learning' },
    { name: 'OpenCV', icon: '👁️', category: 'Machine Learning' },
    { name: 'Scikit-learn', icon: '📊', category: 'Machine Learning' },
    { name: 'Pandas', icon: '🐼', category: 'Data Science' },
    { name: 'NumPy', icon: '🔢', category: 'Data Science' },
    { name: 'Matplotlib', icon: '📈', category: 'Data Science' },
    { name: 'Seaborn', icon: '🌊', category: 'Data Science' },
    { name: 'SciPy', icon: '🧪', category: 'Data Science' },
    { name: 'MySQL', icon: '🗄️', category: 'Databases' },
    { name: 'MongoDB', icon: '🍃', category: 'Databases' },
    { name: 'Git', icon: '📝', category: 'Tools' },
    { name: 'VS Code', icon: '💻', category: 'Tools' },
    { name: 'Jupyter', icon: '📓', category: 'Tools' },
    { name: 'Power BI', icon: '📊', category: 'Tools' }
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Collaboration', level: 90 },
    { name: 'Communication', level: 88 },
    { name: 'Adaptability', level: 92 },
    { name: 'Time Management', level: 85 },
    { name: 'Leadership', level: 82 }
  ];

  const categories = ['Languages', 'Frameworks', 'Machine Learning', 'Data Science', 'Databases', 'Tools'];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical proficiencies and soft skills that drive successful project delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-fade-in-up">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold mb-8 text-center text-primary">Technical Skills</h3>
                
                {categories.map((category) => (
                  <div key={category} className="mb-6">
                    <h4 className="text-lg font-semibold mb-4 text-accent">{category}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {technicalSkills
                        .filter(skill => skill.category === category)
                        .map((skill, index) => (
                          <div
                            key={skill.name}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-all duration-200 card-hover"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div className="animate-fade-in-up">
            <Card className="p-8">
              <CardContent>
                <h3 className="text-2xl font-bold mb-8 text-center text-primary">Soft Skills</h3>
                
                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
