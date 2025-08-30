import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desenvolvedora Fullstack";
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/80"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium">
              Olá, eu sou
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Nayana Heslley
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-300 mb-8">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary min-h-[3rem] flex items-center justify-center">
              <span className="border-r-2 border-primary animate-blink pr-1">
                {displayText}
              </span>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-600 mb-12">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Apaixonada por tecnologia, inovação e soluções que transformam negócios.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-900 mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover:shadow-hover transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("projetos")}
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => scrollToSection("contato")}
              >
                Entrar em Contato
              </Button>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-1200 mb-16">
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/Nayana-Oliveira" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/nayana-heslley-barbosa-oliveira-65796537b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:nayanaheslley123@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="animate-float">
            <button 
              onClick={() => scrollToSection("sobre")}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;