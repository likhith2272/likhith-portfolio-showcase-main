import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download, Heart } from "lucide-react";

export const Contact = () => {
  const interests = [
    "Building practical applications and exploring new technologies",
    "Playing Indoor/Outdoor Games - Maintaining active lifestyle",
    "Travel & Exploration - Discovering new places and cultures"
  ];

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a tech conversation?
            I'm always excited to connect with fellow developers and industry professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-skill-gradient rounded-lg text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <a
                      href="mailto:likithchowdaryjavvaji@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      likithchowdaryjavvaji@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-skill-gradient rounded-lg text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Phone</p>
                    <a
                      href="tel:+919177048359"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9177048359
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-skill-gradient rounded-lg text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-primary">Location</p>
                    <p className="text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <p className="text-primary font-medium mb-4">Connect on Social Media</p>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/javvaji-likhith-chowdary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card-gradient rounded-full border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-card-shadow"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/javvaji-likhith-chowdary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card-gradient rounded-full border border-border hover:border-primary/50 hover:scale-110 transition-all duration-300 shadow-card-shadow"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Resume Download */}
            <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Download Resume</h3>
              <p className="text-muted-foreground mb-6">
                Get a comprehensive overview of my experience and skills
              </p>
              {/* <Button 
                // as = "a"
                href="/resume.pdf"
                download
                className="bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-elegant">
                <Download className="w-4 h-4 mr-2" />
                Download PDF Resume
              </Button> */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-elegant px-4 py-2 rounded-md font-medium text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF Resume
              </a>
            </Card>
          </div>

          {/* Interests & Personal Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Personal Interests
              </h3>

              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{interest}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow">
              <h3 className="text-2xl font-semibold text-primary mb-6">Why Work With Me?</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-primary">Results-Driven:</strong> Proven track record of delivering scalable solutions with measurable impact
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-primary">Continuous Learner:</strong> Always exploring new technologies and best practices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-primary">Team Player:</strong> Strong believer in clean code, collaboration, and agile methodologies
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-primary">Problem Solver:</strong> Passionate about transforming complex requirements into elegant solutions
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Action */}
            {/* <Card className="p-8 bg-card-gradient border-border/50 shadow-card-shadow text-center">
              <h3 className="text-xl font-semibold text-primary mb-4">Ready to Start a Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can contribute to your team's success
              </p>
              <a
                href="mailto:likithchowdaryjavvaji@gmail.com?subject=Let's discuss opportunities"
                className="inline-flex items-center justify-center bg-hero-gradient hover:scale-105 transition-all duration-300 shadow-elegant px-4 py-2 rounded-md font-medium text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Start Conversation
              </a>
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};