import { Code, Database, Wrench, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "C", level: 85 },
        { name: "Python", level: 90 },
        { name: "Java", level: 80 }
      ],
      color: "primary"
    },
    {
      category: "Web Technologies",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 }
      ],
      color: "accent"
    },
    {
      category: "Data & AI",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "Data Structures", level: 80 }
      ],
      color: "primary"
    },
    {
      category: "Developer Tools & Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "SQL", level: 85 },
        { name: "APIs & Integration", level: 65 },
        { name: "Git & GitHub", level: 60 }
      ],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-accent mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technical skills and proficiency levels across different domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="card-elevated p-8 rounded-xl hover-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-full ${
                  category.color === 'primary' 
                    ? 'bg-primary/20 text-primary' 
                    : 'bg-accent/20 text-accent'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.category}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-surface-elevated rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-1000 ${
                          category.color === 'primary' 
                            ? 'bg-gradient-to-r from-primary to-primary-glow' 
                            : 'bg-gradient-to-r from-accent to-accent/70'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
