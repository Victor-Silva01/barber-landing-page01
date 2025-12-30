import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Interior de barbearia profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full animate-fade-up">
            Sistema de Agendamento para Barbearias
          </span>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Sua agenda <span className="text-gradient-gold">organizada</span>,
            <br />
            seu lucro <span className="text-gradient-gold">garantido</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Chega de faltas, WhatsApp lotado e agenda bagunçada. Tenha controle total dos seus horários e aumente seu faturamento com clientes mais comprometidos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Testar Grátis
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display text-gradient-gold">98%</p>
              <p className="text-sm text-muted-foreground">Menos faltas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display text-gradient-gold">+40%</p>
              <p className="text-sm text-muted-foreground">Mais agendamentos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display text-gradient-gold">0</p>
              <p className="text-sm text-muted-foreground">WhatsApp bagunçado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
