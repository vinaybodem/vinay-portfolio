import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech, Computer Science & Engineering (AI & DS)",
      institution: "GMR Institute of Technology",
      period: "2021 - 2025",
      grade: "CGPA: 9.5/10",
      status: "current",
      summary:
        "Engaged in hands-on development of intelligent systems and real-world applications, with a focus on AI, computer vision, and human-computer interaction. Gained practical experience through academic projects that emphasized problem-solving, system design, and building impactful tech solutions."
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-surface">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-accent mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and focus areas in computer science
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((education, index) => (
            <div
              key={index}
              className="card-elevated p-8 rounded-xl hover-lift group"
            >
              <div className="grid md:grid-cols-4 gap-6 items-center">
                {/* Left icons and date */}
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/20 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{education.period}</span>
                  </div>
                </div>

                {/* Degree info and summary */}
                <div className="md:col-span-2">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {education.degree}
                  </h3>
                  <p className="text-muted-foreground">{education.institution}</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    {education.summary}
                  </p>
                </div>

                {/* Grade */}
                <div className="text-right">
                  <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-primary/20 text-yellow-500">
                    {education.grade}
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

export default Education;
  