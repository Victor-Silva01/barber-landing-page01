import { CheckCircle, User, Building, Users } from "lucide-react";

const audiences = [
  {
    icon: User,
    title: "Barbeiros Autônomos",
    description: "Trabalha sozinho e quer organizar sua agenda? Esse sistema é perfeito para você.",
    features: ["Controle total da agenda", "Sem depender de ninguém", "Menos mensagens no WhatsApp"]
  },
  {
    icon: Building,
    title: "Donos de Barbearia",
    description: "Tem uma barbearia e quer profissionalizar o atendimento? Aqui está a solução.",
    features: ["Agenda de todos os barbeiros", "Visão geral do negócio", "Mais profissionalismo"]
  },
  {
    icon: Users,
    title: "Barbearias com Equipe",
    description: "Gerencia vários profissionais? Cada um tem seu painel e você tem o controle geral.",
    features: ["Múltiplos barbeiros", "Relatórios por profissional", "Gestão simplificada"]
  }
];

const TargetAudienceSection = () => {
  return (
    <section id="para-quem" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
            Para Quem É
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Feito para <span className="text-gradient-gold">profissionais</span> como você
          </h2>
          <p className="text-muted-foreground text-lg">
            Não importa o tamanho do seu negócio. O sistema se adapta às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-shadow">
                <audience.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl mb-3 text-foreground">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {audience.description}
              </p>
              
              <ul className="space-y-3">
                {audience.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
