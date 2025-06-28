
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Smartphone } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Resume Screening using NLP",
      description: "Built an automated resume screening tool using Natural Language Processing to match resumes with job descriptions. Used spaCy and TF-IDF for text vectorization, cosine similarity for ranking candidates based on job requirements.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop",
      technologies: ["Python", "spaCy", "NLTK", "Scikit-learn", "Streamlit"],
      liveDemo: "https://demo-resume-screening.com",
      github: "https://github.com/shamsundar2005/resume-screening-nlp"
    },
    {
      title: "Sign Language Detection using Computer Vision",
      description: "Built a real-time Indian Sign Language detection system using deep learning and computer vision. Trained CNNs for accurate gesture recognition, enhancing accessibility for the deaf and mute community.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "CNN"],
      liveDemo: "https://demo-sign-language.com",
      github: "https://github.com/shamsundar2005/sign-language-detection"
    },
    {
      title: "Zomato Restaurant Analysis Dashboard",
      description: "Created an interactive Power BI dashboard to visualize Zomato restaurant data in Bangalore. Cleaned and transformed data to extract KPIs on ratings, bookings, and restaurant performance for business insights.",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=300&fit=crop",
      technologies: ["Power BI", "Data Cleaning", "Data Visualization", "Analytics"],
      liveDemo: "https://demo-zomato-dashboard.com",
      github: "https://github.com/shamsundar2005/zomato-analysis-dashboard"
    },
    {
      title: "Restaurant Helper AI System",
      description: "AI-powered restaurant management system that enhances customer service and staff communication. Implemented object detection to automate operations and improve real-time decision-making processes.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      technologies: ["Python", "OpenCV", "TensorFlow", "Flask", "YOLOv5"],
      liveDemo: "https://demo-restaurant-helper.com",
      github: "https://github.com/shamsundar2005/restaurant-helper-ai"
    },
    {
      title: "Real-time Image Denoising Pipeline",
      description: "Developed a real-time image denoising pipeline using GANs for high-quality, noise-robust outputs. Explored Spiking Neural Networks (SNNs) for fast, memory-efficient denoising models.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      technologies: ["Python", "PyTorch", "GANs", "SNNs", "OpenCV"],
      liveDemo: "https://demo-image-denoising.com",
      github: "https://github.com/shamsundar2005/image-denoising-gan"
    },
    {
      title: "Multiple Disease Prediction System",
      description: "Machine learning system for predicting multiple diseases based on patient symptoms and medical history. Won 1st prize for paper presentation on this innovative healthcare solution.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Machine Learning"],
      liveDemo: "https://demo-disease-prediction.com",
      github: "https://github.com/shamsundar2005/disease-prediction-ml"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my most impactful work in AI, machine learning, and software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="card-hover animate-scale-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-purple-500 to-teal-500 hover:from-purple-600 hover:to-teal-600 text-white"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <Smartphone className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg font-semibold rounded-full hover:bg-primary/10 transition-all duration-300"
            onClick={() => window.open('https://github.com/shamsundar2005', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
