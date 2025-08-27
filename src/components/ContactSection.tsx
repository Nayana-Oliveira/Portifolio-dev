import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigada pelo contato. Retornarei em breve!",
      });
      
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-mail",
      value: "nayanaheslley123@gmail.com",
      href: "mailto:nayanaheslley123@gmail.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Phone,
      label: "Telefone", 
      value: "+55 (11) 96929-7328",
      href: "tel:+5511969297328",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP - Brasil",
      href: "#",
      color: "from-orange-500 to-red-600"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Nayana-Oliveira",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/nayana-heslley-barbosa-oliveira-65796537b/",
      color: "hover:text-blue-400"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/5511969297328",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className="py-20 bg-background-secondary relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Vamos Trabalhar Juntos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Estou sempre aberta a novas oportunidades e projetos interessantes. 
              Entre em contato e vamos conversar!
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                    <Send className="w-6 h-6 text-primary mr-3" />
                    Envie uma Mensagem
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="bg-background border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        E-mail
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu.email@exemplo.com"
                        className="bg-background border-border focus:border-primary transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-me sobre seu projeto ou como posso ajudá-lo..."
                        rows={5}
                        className="bg-background border-border focus:border-primary transition-colors resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover:shadow-hover transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-card hover:bg-card-hover border-border transition-all duration-300 transform hover:scale-105 hover:shadow-hover group"
                  >
                    <CardContent className="p-6">
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4"
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white group-hover:animate-glow`}>
                          <info.icon size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {info.label}
                          </h4>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Conecte-se Comigo
                  </h3>
                  
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-glow group ${social.color}`}
                        title={social.label}
                      >
                        <social.icon size={20} className="group-hover:animate-glow" />
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Tempo de resposta:</strong> Normalmente respondo 
                      em até 24 horas durante dias úteis.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    Pronto para começar seu projeto?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Vamos transformar suas ideias em realidade digital!
                  </p>
                  <Button 
                    variant="default"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-glow hover:shadow-hover transition-all duration-300"
                    onClick={() => {
                      const element = document.querySelector('#message');
                      if (element) {
                        (element as HTMLElement).focus();
                      }
                    }}
                  >
                    Começar Conversa
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;