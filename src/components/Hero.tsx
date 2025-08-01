import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left fade-in">
            <div className="mb-6">
              <div className="inline-block w-12 h-1 bg-accent mb-4"></div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                Bodem
                <br />
                <span className="text-gradient">Vinay</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">
                Software Developer & AI Enthusiast
              </p>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
                Passionate about crafting intuitive, efficient, and scalable applications that transform ideas into impactful software solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-glow text-primary-foreground"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border hover:bg-surface-elevated"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              {/* Optional Resume Download Button */}
              {/*
              <Button variant="ghost" size="lg" asChild>
                <a href="/resume.pdf" download aria-label="Download Resume">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              */}
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/vinaybodem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-full bg-surface-elevated border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/bodem-vinay-a4861a258/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-full bg-surface-elevated border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 hover-lift">
                <img
                  src="https://i.postimg.cc/ZKw8CPSp/Whats-App-Image-2025-07-31-at-7-29-48-PM.jpg"
                  alt="Bodem Vinay smiling in profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About Section"
          className="scroll-indicator p-2 rounded-full border border-border hover:border-primary transition-colors duration-300"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
