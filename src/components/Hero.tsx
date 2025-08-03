import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import profile from "@/assets/profile.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto bg-card-gradient rounded-full border-4 border-primary shadow-glow flex items-center justify-center">
            {/* <span className="text-4xl font-bold text-primary">LC</span> */}
            <img 
              src={profile} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold bg-hero-gradient bg-clip-text text-transparent animate-pulse">
              JAVVAJI LIKHITH CHOWDARY
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
              Full-Stack Developer
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Results-driven Full-Stack Developer specializing in Java, Spring Boot, and Angular. 
              Passionate about building secure, scalable web applications and transforming ideas into reliable software solutions.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-sm lg:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9177048359</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>likithchowdaryjavvaji@gmail.com</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-elegant px-8 py-3"
            >
              View My Work
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary/30 hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8 py-3"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://linkedin.com/in/javvaji-likhith-chowdary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card-gradient rounded-full border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-card-shadow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/javvaji-likhith-chowdary" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card-gradient rounded-full border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-card-shadow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:likithchowdaryjavvaji@gmail.com"
              className="p-3 bg-card-gradient rounded-full border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-card-shadow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};