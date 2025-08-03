import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  const workExperience = [
    {
      company: "Prudentity",
      position: "Backend Developer (Java, Angular & Spring Boot)",
      duration: "Jun 2024 - Present",
      location: "Hyderabad, India",
      // type: "Full-time",
      responsibilities: [
        "Developed and maintained scalable backend services using Spring Boot and RESTful APIs",
        "Collaborated on frontend development using Angular framework",
        "Implemented JWT-based authentication and authorization systems",
        "Integrated Oracle database interactions with optimized queries",
        "Contributed to secure API development and responsive UI behavior",
        "Adopted best practices in clean code, reusability, and application security"
      ],
      technologies: ["Java", "Spring Boot", "Angular", "JWT", "Oracle", "REST APIs"]
    }
  ];

  const internships = [
    {
      title: "Full-Stack Developer",
      organization: "APSCHE",
      year: "2024",
      description: "Developed full-stack applications with modern frameworks"
    },
    {
      title: "Machine Learning Foundations",
      organization: "AWS Academy",
      year: "2023",
      description: "Gained expertise in ML algorithms and cloud-based ML services"
    },
    {
      title: "Salesforce Developer Virtual Internship",
      organization: "Smart Internz",
      year: "2023",
      description: "Learned Salesforce platform development and customization"
    },
    {
      title: "Academic Process Mining Fundamentals",
      organization: "Internal Research",
      year: "2023",
      description: "Research on process mining techniques and applications"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
        </div>
        
        {/* Current Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6" />
            Current Position
          </h3>
          
          {workExperience.map((job, index) => (
            <Card key={index} className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-primary">{job.position}</h4>
                  <p className="text-lg text-accent font-semibold">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                    <span>{job.duration}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
{/*                     <Badge variant="outline" className="border-primary/30 text-primary">
                      {job.type}
                    </Badge> */}
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <div key={respIndex} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{responsibility}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex}
                    className="bg-skill-gradient text-white border-none"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6" />
            Internships & Training
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {internships.map((internship, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card-gradient border-border/50 shadow-card-shadow hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">{internship.title}</h4>
                    <p className="text-accent font-medium">{internship.organization}</p>
                    <p className="text-sm text-muted-foreground">{internship.year}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{internship.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8 flex items-center gap-3">
            <GraduationCap className="w-6 h-6" />
            Education
          </h3>
          
          <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-skill-gradient rounded-lg text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-primary">Bachelor of Technology</h4>
                <p className="text-lg text-accent font-semibold">Information Technology</p>
                <p className="text-muted-foreground">Vasireddy Venkatadri Institute of Technology</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <span>2020 - 2024</span>
                  <span>•</span>
                  <span>Guntur, India</span>
                  <span>•</span>
                  <Badge className="bg-hero-gradient text-white border-none">
                    80% Score
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
