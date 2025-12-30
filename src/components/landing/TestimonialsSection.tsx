import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Barbeiro Autônomo",
    content: "Desde que comecei a usar, minhas faltas caíram para quase zero. O sistema é muito fácil de usar.",
    rating: 5
  },
  {
    name: "Roberto Santos",
    role: "Dono de Barbearia",
    content: "Minha equipe de 4 barbeiros agora trabalha de forma muito mais organizada. Os clientes adoram agendar online.",
    rating: 5
  },
  {
    name: "André Oliveira",
    role: "Barbeiro Profissional",
    content: "A taxa de reagendamento foi um divisor de águas. Meus clientes agora respeitam muito mais os horários.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            O que nossos <span className="text-gradient-gold">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja como o sistema está transformando barbearias por todo o Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-2xl border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-display text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Espaço reservado para depoimentos reais de clientes.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
