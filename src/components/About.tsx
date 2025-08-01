import { ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block w-12 h-1 bg-accent mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, passion, and journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr,1fr] gap-12 items-start">
          {/* Left - About Text & Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hello, I'm Bodem Vinay</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a passionate software developer focused on creating reliable, user-friendly applications that balance performance and design.
                My work revolves around turning real-world ideas into impactful, scalable solutions through the use of modern technologies.
                With strong technical foundations and a deep interest in AI systems, I enjoy working in collaborative teams that build meaningful products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I aim to constantly evolve by solving complex problems, exploring innovative tools, and contributing to projects that push the boundaries of digital experiences.
                Driven by a curiosity for AI, I strive to create smart, adaptive systems that enhance user interactions and deliver long-term value.
              </p>
            </div>

            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Rajahmundry, India</span>
              </div>

              <a
                href="https://drive.google.com/file/d/1R2rAAxWIww4p7esHiNlxi-5aoLEFAuhP/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="flex flex-col gap-8 mt-12">
            <div className="card-elevated p-5 rounded-xl hover-lift">
              <div className="text-3xl font-bold text-primary mb-1">2+</div>
              <div className="text-m text-muted-foreground">Projects Working</div>
            </div>
            <div className="card-elevated p-5 rounded-xl hover-lift">
              <div className="text-3xl font-bold text-accent mb-1">AI & ML</div>
              <div className="text-m text-muted-foreground"> Specialization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
