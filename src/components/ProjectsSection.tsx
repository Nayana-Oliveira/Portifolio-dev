import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import projectLumina from "@/assets/lumina.png";
import projectAstrotech from "@/assets/astrotech.png"; 

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Astrotech",
      description: "Landing page moderna e responsiva para uma empresa de tecnologia, com foco em energia solar.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      icon: Code,
      gradient: "from-green-500 to-cyan-600",
      features: ["Design Responsivo", "Menu Mobile Interativo", "Animações de Scroll"],
      github: "https://github.com/Nayana-Oliveira/Astrotech",
      demo: "https://astrotech-olive.vercel.app/",
      image: projectAstrotech
    },
    {
      title: "Lumina",
      description: "Plataforma para gerenciar livros e filmes assistidos.",
      technologies: ["Mongoose", "Express", "HTML5", "JavaScript", "CSS3"],
      icon: Zap,
      gradient: "from-blue-500 to-purple-600",
      features: ["Dashboards", "Criação, edição e exclusão de livros e filmes", "Responsivo"],
      github: "https://github.com/Nayana-Oliveira/Lumina",
      demo: "https://lumina-olive-seven.vercel.app/",
      image: projectLumina
    }
  ];

  return (
    <section 
      id="projetos" 
      ref={sectionRef}
      className="py-20 bg-background-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Alguns dos projetos que desenvolvi.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="bg-card hover:bg-card-hover border-border transition-all duration-500 transform hover:scale-[1.02] hover:shadow-hover overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-8 p-8">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white group-hover:animate-glow`}>
                            <project.icon size={28} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Tecnologias Utilizadas</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span 
                                key={tech}
                                className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <Button 
                            variant="default"
                            className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover:shadow-hover transition-all duration-300"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Código
                          </Button>
                          <Button 
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <h4 className="text-lg font-bold text-foreground">Principais Funcionalidades</h4>
                        <div className="space-y-4">
                          {project.features.map((feature, featureIndex) => (
                            <div 
                              key={feature}
                              className="flex items-center space-x-3 group-hover:animate-slide-in-right"
                              style={{ animationDelay: `${featureIndex * 100}ms` }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full group-hover:animate-glow"></div>
                              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-secondary rounded-lg p-2 mt-6 border border-border overflow-hidden">
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <img 
                              src={project.image}
                              alt={`${project.title} preview`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground mb-6">
              Interessado em ver mais projetos ou discutir uma colaboração?
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover:shadow-hover transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;