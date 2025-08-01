import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "AI & Software Intern",
      company: "Andhra University",
      period: "2024 - 2025",
      type: "Internship",
      description: [
        "Developed real-time AI exam proctoring system using computer vision",
        "Implemented team-based testing protocols and automation features",
        "Worked with cutting-edge CV algorithms for behavior analysis"
      ],
      skills: ["Python", "Computer Vision", "AI/ML", "Real-time Systems"]
    },
    {
      role: "Front-End Intern",
      company: "Topnotch Softwares",
      period: "2022 - 2023",
      type: "Internship",
      description: [
        "Built responsive Student Portal using HTML, CSS, and JavaScript",
        "Enhanced user experience and interface design principles",
        "Collaborated with design team to implement modern UI patterns"
      ],
      skills: ["HTML", "CSS", "JavaScript",  "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-accent mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional experience and internships that shaped my expertise
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="card-elevated p-8 rounded-xl hover-lift group"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/20 text-primary rounded-full">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg text-muted-foreground">{exp.company}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                    {exp.type}
                  </span>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-surface-elevated border border-border rounded-full text-sm hover:border-primary transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;