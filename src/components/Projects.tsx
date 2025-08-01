import { Github, ExternalLink, Eye, Mic, MousePointer, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Voice Command + Gesture Recognition HCI System",
      description: "An innovative human-computer interaction system that combines voice commands with gesture recognition for intuitive device control. Built using machine learning and computer vision technologies.",
      image: "🎤",
      features: [
        "Real-time voice command processing",
        "Gesture recognition using computer vision",
        "Multi-modal interaction interface",
        "Machine learning integration"
      ],
      technologies: ["Python", "OpenCV", "TensorFlow", "Speech Recognition", "ML","PyAutoGUI"],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "AI-Enabled Secure Exam Proctoring System",
      description: "A robust and intelligent exam proctoring system designed to monitor students in real-time during online examinations using AI-based behavior analysis. A GUI-based exam system that runs without any human supervision.",
      image: "🎓",
      features: [
        "Real-time student monitoring across devices",
        "Intuitive and accessible GUI for seamless exam experience",
        "Automated behavior analysis for detecting anomalies",
        "Lightweight and optimized for performance under exam load"

      ],
      technologies: ["Python", "OpenCV", "SQLite", "Threading & Real-time Processing", "Tkinter","YOLOv3"],
      github: "#",
      demo: "#",
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-accent mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase of my technical projects and innovative solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="card-elevated p-8 rounded-xl hover-lift group"
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center text-2xl">
                      {project.image}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Features */}
                <div>
                  <h4 className="font-medium mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="font-medium mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-surface-elevated border border-border rounded-full text-xs hover:border-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-border hover:bg-surface-elevated flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary-glow text-primary-foreground flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/vinaybodem" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-surface-elevated"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;