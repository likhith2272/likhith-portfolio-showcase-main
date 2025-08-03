import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "SQL", "HTML", "CSS", "JavaScript"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "JAX-RS", "Angular", "Bootstrap", "JUnit", "Jasmine", "Hibernate"],
      icon: "🚀"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP Basics", "Git", "GitHub", "Docker", "Firebase"],
      icon: "☁️"
    },
    {
      title: "Databases & Tools",
      skills: ["Oracle", "MySQL", "PL/SQL", "Postman", "VS Code", "Eclipse", "Cursor"],
      icon: "🗄️"
    },
    {
      title: "Specialized Skills",
      skills: ["RESTful APIs", "JWT Authentication", "Streams & Generics", "DSA", "Service Calls", "Capacitor"],
      icon: "🛠️"
    }
  ];

  const certifications = [
    "Google Cloud Digital Leader",
    "Microsoft Certified: Azure Administrator Associate",
    "AWS Academy Graduate - Cloud Foundations",
    "AWS Academy Graduate - Data Analytics",
    "AWS Academy Graduate - ML Foundations",
    "NPTEL DSA with Java",
    "NPTEL Programming with Python",
    "HackerRank Certified - Java",
    "HackerRank Certified - Python",
    "HackerRank Certified - SQL"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card-gradient border-border/50 shadow-card-shadow hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-skill-gradient text-white border-none hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Certifications */}
        <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-200"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};