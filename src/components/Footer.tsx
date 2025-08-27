import { Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "inicio", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "habilidades", label: "Habilidades" },
    { id: "projetos", label: "Projetos" },
    { id: "experiencia", label: "Experiência" },
    { id: "contato", label: "Contato" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                &lt;Nayana Heslley/&gt;
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Desenvolvedora apaixonada por criar soluções digitais inovadoras 
              que transformam ideias em realidade.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Navegação Rápida
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Contato
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">E-mail:</strong>{" "}
                <a 
                  href="mailto:nayanaheslley123@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  nayanaheslley123@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-foreground">Localização:</strong>{" "}
                São Paulo, SP - Brasil
              </p>
              <p>
                <strong className="text-foreground">Disponibilidade:</strong>{" "}
                Aberta a novos projetos
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Nayana Heslley.</span>
            </div>

            <div className="text-sm text-muted-foreground">
              <span>Desenvolvido com </span>
              <span className="text-primary font-medium">React</span>
              <span>, </span>
              <span className="text-primary font-medium">TypeScript</span>
              <span> & </span>
              <span className="text-primary font-medium">Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 text-sm group"
          >
            <span>Voltar ao Topo</span>
            <div className="w-1 h-1 bg-primary rounded-full group-hover:animate-glow"></div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;