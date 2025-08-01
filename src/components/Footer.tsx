import { Github, Linkedin, Mail, Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-12 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-gradient mb-2">Bodem Vinay</div>
            <p className="text-muted-foreground text-sm">Software Developer & AI Enthusiast</p>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center">
            <div className="flex gap-4">
              <a href="https://github.com/vinaybodem" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-elevated border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-lift" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/bodem-vinay-a4861a258/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-elevated border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-lift" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:bodemvinay@gmail.com" className="p-3 rounded-full bg-surface-elevated border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-lift" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Bodem Vinay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;