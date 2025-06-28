
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my journey, passion, and the values that drive my work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <Card className="p-8 card-hover">
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Hello! I'm Sham Sundar K, a dedicated and innovative software engineer with a passion 
                  for creating efficient and engaging digital experiences. I specialize in full-stack 
                  development and machine learning, always striving to build impactful solutions that 
                  make a difference.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My journey in technology is driven by an insatiable curiosity for problem-solving 
                  and a commitment to continuous learning. I believe in the power of combining 
                  traditional software development with cutting-edge AI technologies to create 
                  innovative solutions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you can find me exploring new hiking trails, experimenting 
                  with new recipes in the kitchen, or diving into a good book. I believe in continuous 
                  learning and always look for opportunities to expand my knowledge and skill set.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Core Values</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Innovation through problem-solving
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Continuous learning and growth
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Building impactful solutions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Quality and attention to detail
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-teal-500 p-1 animate-float">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                  <img
                    src="#"
                    alt="Sham Sundar K - Professional headshot"
                    className="w-72 h-72 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-ping animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
