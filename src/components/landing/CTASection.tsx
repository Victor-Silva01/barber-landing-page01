import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="comecar" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl mb-6">
            Pronto para <span className="text-gradient-gold">transformar</span> sua barbearia?
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Comece agora mesmo. Teste grátis e veja como é fácil organizar sua agenda e aumentar seu faturamento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              <Calendar className="w-5 h-5 mr-2" />
              Testar Grátis por 7 Dias
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="xl" className="group">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="p-4 bg-card/50 rounded-xl border border-border/50">
              <p className="text-2xl font-display text-gradient-gold">7 dias</p>
              <p className="text-muted-foreground text-sm">Teste grátis</p>
            </div>
            <div className="p-4 bg-card/50 rounded-xl border border-border/50">
              <p className="text-2xl font-display text-gradient-gold">5 min</p>
              <p className="text-muted-foreground text-sm">Para configurar</p>
            </div>
            <div className="p-4 bg-card/50 rounded-xl border border-border/50">
              <p className="text-2xl font-display text-gradient-gold">0</p>
              <p className="text-muted-foreground text-sm">Cartão necessário</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
