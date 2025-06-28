
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence & Machine Learning",
      institution: "Kongu Engineering College",
      duration: "2022 - 2026",
      gpa: "8.44/10.0 CGPA",
      coursework: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Data Structures & Algorithms",
        "Artificial Intelligence",
        "Neural Networks"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "SRV Matric Hr Sec School",
      duration: "2022",
      gpa: "83.0%",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science",
        "English",
        "Tamil"
      ]
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "SRV Matric Hr Sec School",
      duration: "2020",
      gpa: "98.2%",
      coursework: [
        "Mathematics",
        "Science",
        "Social Science",
        "English",
        "Tamil",
        "Computer Applications"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                  <h4 className="text-lg font-semibold mb-2">{edu.institution}</h4>
                  <div className="flex justify-center items-center gap-4 text-muted-foreground">
                    <span>{edu.duration}</span>
                    {edu.gpa && <span>•</span>}
                    {edu.gpa && <span className="font-semibold text-accent">{edu.gpa}</span>}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-4 text-center">Key Subjects</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="bg-secondary/50 rounded-lg p-3 text-sm text-center hover:bg-secondary/70 transition-colors duration-200"
                      >
                        {course}
                      </div>
                    ))}
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

export default EducationSection;
