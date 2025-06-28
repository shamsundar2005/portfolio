
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications with Modern Patterns",
      excerpt: "Explore advanced React patterns and architectural decisions that help create maintainable and scalable applications for production environments.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Architecture", "JavaScript"]
    },
    {
      title: "The Art of Clean Code: Best Practices for Developers",
      excerpt: "Dive deep into clean code principles that make your codebase more readable, maintainable, and enjoyable to work with for your entire team.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      tags: ["Clean Code", "Best Practices", "Development"]
    },
    {
      title: "From Frontend to Full-Stack: My Development Journey",
      excerpt: "A personal reflection on transitioning from frontend development to full-stack, including challenges faced and lessons learned along the way.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      tags: ["Career", "Full-Stack", "Personal"]
    },
    {
      title: "Optimizing Web Performance: A Comprehensive Guide",
      excerpt: "Learn practical techniques and tools to optimize your web applications for better performance, user experience, and search engine rankings.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      date: "Nov 28, 2024",
      readTime: "10 min read",
      tags: ["Performance", "Optimization", "Web Development"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Blog & Articles</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, tutorials, and insights from my development journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="card-hover animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-tight hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary hover:text-primary/80"
                >
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 text-lg font-semibold rounded-full hover:bg-primary/10 transition-all duration-300"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
