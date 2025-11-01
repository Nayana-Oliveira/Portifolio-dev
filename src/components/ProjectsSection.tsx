import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import projectLumina from "@/assets/lumina.png";
import projectAstrotech from "@/assets/astrotech.png";
import projectStokki from "@/assets/stokki.png";
import projectGrainoble from "@/assets/grão-nobre.png";
import projectHako from "@/assets/hako.png";
import projectBosque from "@/assets/Bosque-Suporte.jpg";
import projectItrainee from "@/assets/ITrainee.png";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Astrotech",
      description: "Meu primeiro projeto de landing page onde foquei em aprender design responsivo com HTML e CSS puro.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Nayana-Oliveira/Astrotech",
      demo: "https://nayana-oliveira.github.io/Astrotech/",
      image: projectAstrotech,
      type: "frontend"
    },
    {
      title: "Lumina",
      description: "Plataforma para gerenciar livros e filmes assistidos.",
      technologies: ["Mongoose", "Express", "HTML5", "JavaScript", "CSS3"],
      github: "https://github.com/Nayana-Oliveira/Lumina",
      demo: "https://lumina-olive-seven.vercel.app/",
      image: projectLumina,
      type: "fullstack"
    },
    {
      title: "Hako",
      description: "Plataforma para gerenciar livros e filmes assistidos.",
      technologies: ["Mongoose", "Express", "HTML5", "JavaScript", "CSS3", "SQLite"],
      github: "https://github.com/Nayana-Oliveira/Lumina",
      demo: "https://lumina-olive-seven.vercel.app/",
      image: projectHako,
      type: "fullstack"
    },
    {
      title: "Stokki",
      description: "Um sistema de estoque que criei para praticar a lógica de back-end com Express e o gerenciamento de estado no React.",
      technologies: ["React", "Express", "Vite", "CSS3"],
      github: "https://github.com/Nayana-Oliveira/Stokki",
      demo: "https://stokki.vercel.app/login",
      image: projectStokki,
      type: "fullstack"
    },
    {
      title: "Grão Nobre",
      description: "Landing page responsiva Grão Nobre Cafeteria.",
      technologies: ["html5", "CSS3", "JavaScript"],
      github: "https://github.com/Nayana-Oliveira/Grao-Nobre",
      demo: "https://grao-nobre.vercel.app/",
      image: projectGrainoble,
      type: "Frontend"
    },
    {
      title: "Bosque Suporte",
      description: "Meu projeto full-stack mais completo, onde integrei React com back-end em Node.js e um banco de dados MySQL para gerenciar um sistema de Help Desk.",
      technologies: ["React.js", "Express", "MySQL", "CSS3", "Vite", "Node.js", "JWT"],
      github: "https://github.com/Nayana-Oliveira/Bosque-Suporte",
      demo: "https://bosque-suporte.vercel.app/login",
      image: projectBosque,
      type: "fullstack"
    },
    {
      title: "Itrainee",
      description: "Site iTrainee para o Projeto Integrador do primeiro semestre.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Nayana-Oliveira/iTrainee",
      demo: "https://itrainee.netlify.app/",
      image: projectItrainee,
      type: "frontend"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group transform transition-transform duration-300 ease-out hover:scale-[1.03] ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="bg-card border-border overflow-hidden h-full flex flex-col hover:shadow-hover transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden border-b border-border">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-5">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed min-h-[3rem]">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-5 pt-0 flex-grow">
                    <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wider">Tecnologias</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full text-xs font-medium cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 pt-0 mt-auto">
                    <div className="flex gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-primary hover:bg-primary-hover text-primary-foreground text-xs shadow-glow hover:shadow-hover transition-all duration-300"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        Código
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs transition-all duration-300"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Demo
                      </Button>
                    </div>
                  </CardFooter>
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