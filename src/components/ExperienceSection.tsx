
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Web Epic Technology Private Limited",
      role: "Deep Learning Engineer",
      duration: "Ongoing",
      location: "Coimbatore, India",
      achievements: [
        "Developed a real-time image denoising pipeline using GANs for high-quality, noise-robust outputs",
        "Explored Spiking Neural Networks (SNNs) for fast, memory-efficient denoising models",
        "Implemented advanced deep learning architectures including CNNs and GANs for image processing",
        "Utilized PyTorch and TensorFlow for model development and optimization",
        "Applied computer vision techniques using OpenCV for preprocessing and post-processing pipelines"
      ]
    },
    {
      company: "H.Solos Cargo Limited",
      role: "Computer Vision Engineer",
      duration: "Nov 2024 - Jan 2025",
      location: "Texas, USA",
      achievements: [
        "Built the 'Restaurant Helper' using AI to enhance customer service and staff communication",
        "Implemented object detection systems to automate operations and improve real-time decisions",
        "Developed YOLOv5-based object detection models for accurate real-time recognition",
        "Created CNN architectures for image classification tasks with high accuracy",
        "Integrated Flask web framework for deploying AI models in production environments"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 to-teal-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                        <h4 className="text-lg font-semibold">{exp.company}</h4>
                        <div className="flex flex-col sm:flex-row sm:justify-between text-muted-foreground text-sm mt-2">
                          <span>{exp.duration}</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
