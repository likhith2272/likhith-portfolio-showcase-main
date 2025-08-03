import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile */}
          <div className="space-y-6">
            <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-4">Professional Profile</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Results-driven and adaptable Full-Stack Developer with practical experience in delivering secure, scalable web applications using Java, Spring Boot, and Angular. Expertise in building backend systems, integrating RESTful APIs, and developing responsive, role-based frontend interfaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Skilled in managing relational databases like Oracle and MySQL, securing APIs using JWT authentication. Proficient in writing unit and integration tests using JUnit and Jasmine, and adopting principles of clean code, modular design, and agile collaboration.
              </p>
            </Card>
          </div>
          
          {/* Right: Experience & Education */}
          <div className="space-y-6">
            <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-6">Current Position</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-xl font-semibold">Backend Developer</h4>
                  <p className="text-primary">Prudentity</p>
                  <p className="text-sm text-muted-foreground">Jun 2024 - Present | Hyderabad, India</p>
                  <p className="text-muted-foreground mt-2">
                    Developing scalable backend services using Spring Boot and RESTful APIs, 
                    implementing JWT-based authentication, and contributing to secure API development.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-6">Education</h3>
              <div className="border-l-4 border-accent pl-6">
                <h4 className="text-xl font-semibold">Bachelor of Technology</h4>
                <p className="text-accent">Information Technology</p>
                <p className="text-sm text-muted-foreground">
                  Vasireddy Venkatadri Institute of Technology | 2020-2024 | 80%
                </p>
                <p className="text-muted-foreground mt-2">Guntur, India</p>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="p-6 text-center bg-card-gradient border-border/50 shadow-card-shadow hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
          </Card>
          <Card className="p-6 text-center bg-card-gradient border-border/50 shadow-card-shadow hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </Card>
          <Card className="p-6 text-center bg-card-gradient border-border/50 shadow-card-shadow hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">80%</div>
            <div className="text-sm text-muted-foreground">Academic Score</div>
          </Card>
          <Card className="p-6 text-center bg-card-gradient border-border/50 shadow-card-shadow hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">6M+</div>
            <div className="text-sm text-muted-foreground">Experience</div>
          </Card>
        </div>
      </div>
    </section>
  );
};