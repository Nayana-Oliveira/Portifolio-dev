import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

const experiences = [
{
  title: "Projeto de empreendedorismo",
  company: "Projeto Acadêmico",
  location: "Brasil",
  period: "2024",
  description: "Website feito para apresentar um produto para vender.",
  achievements: [
    "Design responsivo e moderno"
  ],
  type: "work"
},
{
  title: "Portfolio Pessoal",
  company: "Projeto Individual",
  location: "Brasil",
  period: "2025",
  description: "Desenvolvimento de portfolio responsivo usando React e TypeScript, com animações suaves e design moderno para apresentar projetos e habilidades.",
  achievements: [
    "Design responsivo e moderno",
    "Animações fluidas com CSS",
    "Componentes reutilizáveis em React"
  ],
  type: "work"
}
];

  const certifications = [
    {
      name: "Oracle Database Certified",
      issuer: "Oracle",
      year: "20255",
      icon: Award
    },
    {
      name: "Oracle Database Foundations",
      issuer: "Oracle",
      year: "2025", 
      icon: Award
    }
  ];

  return (
    <section 
      id="experiencia" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Experiência & Formação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Minha trajetória profissional e acadêmica no mundo da tecnologia
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
                
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div 
                      key={index}
                      className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className={`absolute left-6 w-4 h-4 rounded-full border-2 border-background z-10 ${
                        exp.type === 'work' ? 'bg-primary' : 'bg-accent'
                      }`}></div>

                      <div className="ml-16">
                        <Card className="bg-card hover:bg-card-hover border-border transition-all duration-300 transform hover:scale-[1.02] hover:shadow-hover group">
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                {exp.type === 'work' ? (
                                  <Briefcase className="w-5 h-5 text-primary group-hover:animate-glow" />
                                ) : (
                                  <GraduationCap className="w-5 h-5 text-accent group-hover:animate-glow" />
                                )}
                                <div>
                                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                                    {exp.title}
                                  </h3>
                                  <p className="text-primary font-semibold">{exp.company}</p>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-4">
                              {exp.description}
                            </p>

                            <div>
                              <h4 className="font-semibold text-foreground mb-2">
                                {exp.type === 'work' ? 'Principais Conquistas:' : 'Destaques:'}
                              </h4>
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <li 
                                    key={achIndex}
                                    className="flex items-start space-x-2 text-sm text-muted-foreground"
                                  >
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className={`sticky top-24 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                      <Award className="w-5 h-5 text-primary mr-2" />
                      Certificações
                    </h3>
                    
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <div 
                          key={index}
                          className="p-4 bg-secondary hover:bg-tech-gray-light rounded-lg transition-all duration-300 transform hover:scale-105 group"
                        >
                          <div className="flex items-start space-x-3">
                            <cert.icon className="w-5 h-5 text-primary mt-0.5 group-hover:animate-glow" />
                            <div>
                              <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                                {cert.name}
                              </h4>
                              <p className="text-xs text-muted-foreground">
                                {cert.issuer}
                              </p>
                              <p className="text-xs text-primary font-medium mt-1">
                                {cert.year}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;