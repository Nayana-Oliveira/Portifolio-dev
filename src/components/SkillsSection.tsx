import { useEffect, useRef, useState } from "react";
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  GitBranch,
  Cpu,
  Shield,
  Palette,
  Zap
} from "lucide-react";

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Backend", 
      icon: Server,
      skills: ["Node.js", "Java", "Python"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Database",
      icon: Database, 
      skills: ["MySQL", "SQL Server", "MongoDB"],
      color: "from-orange-500 to-red-600"
    },
    {
      title: "DevOps",
      icon: Cpu,
      skills: ["AWS", "Git"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Android"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Tools",
      icon: Zap,
      skills: ["VS Code", "Figma"],
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section 
      id="habilidades" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Habilidades Técnicas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="bg-card hover:bg-card-hover border border-border rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-hover group">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4 group-hover:animate-glow`}>
                      <category.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className="flex items-center group-hover:animate-slide-in-left"
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:animate-glow"></div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Nível de Proficiência</span>
                      <span>Intermediário</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover:animate-glow`}
                        style={{ 
                          width: isVisible ? '50%' : '0%',
                          transitionDelay: `${categoryIndex * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-foreground mb-8">Outras Competências</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Metodologias Ágeis",
                "Clean Code", 
                "Design Patterns",
                "Microserviços",
                "Testes Unitários",
                "UX/UI Basics",
              ].map((skill, index) => (
                <span 
                  key={skill}
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;