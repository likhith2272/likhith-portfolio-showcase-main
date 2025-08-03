import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Database, Zap, Shield, Brain, Book } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Library Management System",
      description:
        "Full-stack Angular + Spring Boot application managing over 10,000+ books with real-time issue/return workflows.",
      achievements: [
        "JWT-secured APIs with book availability tracking",
        "Role-based dashboards with automated stock updates",
        "90% reduction in manual effort",
        "35% faster response time through optimized DB queries",
      ],
      technologies: ["Angular", "Spring Boot", "JWT", "Oracle", "REST APIs"],
      icon: <Book className="w-8 h-8" />,
      stats: "10,000+ Books • 90% Efficiency ",
      codeLink: "https://github.com/likhith2272/Library-Management-System",
    },
    {
      title: "Human Resource Management System (HRMS)",
      description:
        "Modular HRMS platform with comprehensive dashboards for HR/Admin, Manager, and Employee roles.",
      achievements: [
        "Onboarding, attendance, leave approvals, and payroll modules",
        "40% increase in HR process efficiency",
        "Half-day leave logic with reminder workflows",
        "100% improvement in leave tracking accuracy",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "Oracle", "JWT"],
      icon: <Database className="w-8 h-8" />,
      stats: "Multi-User • 100% Accuracy",
      codeLink: "https://github.com/likhith2272/Human-Resource-Management-System",
    },
    {
      title: "BoardOnn Application",
      description:
        "Facility management tool with CAD diagram viewing and dynamic space mapping capabilities.",
      achievements: [
        "95% building layout visualization coverage",
        "Capacitor integration for mini-installable app",
        "Floor/building hierarchy with image overlays",
        "50% reduction in space identification time",
      ],
      technologies: ["Java", "Spring Boot", "Angular", "Oracle", "Capacitor", "CAD"],
      icon: <Zap className="w-8 h-8" />,
      stats: "95% Coverage ",
      codeLink: "#",
    },
    {
      title: "Smart Notes PWA Web App",
      description:
        "Installable PWA with offline support, allowing users to manage notes without internet connectivity.",
      achievements: [
        "IndexedDB for offline functionality",
        "Pinning, image uploads, dark mode, PDF export",
        "89% improvement in user engagement",
        "98% sync accuracy across devices with Firebase",
      ],
      technologies: ["PWA", "IndexedDB", "Firebase", "Push Notifications", "PDF Export"],
      icon: <Shield className="w-8 h-8" />,
      stats: "89% Engagement • 98% Sync • Offline Ready",
      codeLink: "https://github.com/likhith2272/QuickNote-Progressive-Web-App-",
    },
    {
      title: "Lung And Colon Cancer Dectection",
      description:
        "Diagnostic model using ResNet-50 with transfer learning for MRI analysis.",
      achievements: [
        "96.3% accuracy on 3,000+ brain MRI images",
        "Flask deployment with clinical UI",
        "2 seconds per image prediction latency",
        "20% improvement in model generalization",
      ],
      technologies: ["Python", "ResNet-50", "Flask", "Transfer Learning", "Data Augmentation"],
      icon: <Brain className="w-8 h-8" />,
      stats: "96.3% Accuracy • 2s Prediction • 3K+ Images",
      codeLink: "https://github.com/likhith2272/Lung-and-Colon-Cancer-Detection",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Showcasing innovative solutions that combine technical excellence with real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group p-8 bg-card-gradient border-border/50 shadow-card-shadow hover:scale-105 transition-all duration-300 hover:shadow-glow"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-skill-gradient rounded-lg text-white group-hover:scale-110 transition-all duration-300">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                  <p className="text-sm text-accent font-medium">{project.stats}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-6">
                {project.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* View Code Button Only */}
              <div className="flex">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 hover:bg-primary/10 flex-1"
                  onClick={() => window.location.href = project.codeLink}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow inline-block">
            <h3 className="text-2xl font-semibold text-primary mb-4">Explore More Projects</h3>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for additional projects and contributions
            </p>
            <Button className="bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-elegant">
              <Github className="w-5 h-5 mr-2" />
              <a
                href="https://github.com/likhith2272"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub Profile
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};
