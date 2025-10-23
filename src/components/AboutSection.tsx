import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Mail, MapPin, User, CheckCircle } from "lucide-react"; 
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import developerAvatar from "@/assets/developer-avatar.jpg"; 

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className="py-20 bg-background-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start"> 
            <div className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'} h-full`}>
              <div className="relative overflow-hidden rounded-2xl shadow-card h-full">
                <img 
                  src={developerAvatar}
                  alt="Sua Foto" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            </div>

            <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'} h-full`}>
              <Card className="bg-card border-border shadow-lg h-full flex flex-col justify-between">
                <CardContent className="p-6 md:p-8 space-y-6 flex-grow">
                  <h3 className="text-2xl font-bold text-foreground">
                    Transformando Ideias em Soluções Digitais
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                    <p>
                      Sou estudante de Análise e Desenvolvimento de Sistemas e uma entusiasta de tecnologia. Atualmente, estou em busca da minha primeira oportunidade profissional, aplicando meus estudos em projetos práticos de desenvolvimento web.
                    </p>
                    <p>
                      Minha jornada começou na curiosidade de entender como as coisas funcionam por trás 
                      das telas. Atualmente, estou focada em tecnologias como React, JavaScript, Java e 
                      bancos de dados, sempre buscando as melhores práticas e soluções eficientes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;