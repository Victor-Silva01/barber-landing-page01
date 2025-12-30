import { Smartphone, Search, Calendar, CheckCircle, User, Clock, Scissors, CreditCard } from "lucide-react";

const clientSteps = [
  {
    icon: Smartphone,
    step: "01",
    title: "Acesse o sistema",
    description: "O cliente entra pelo link da sua barbearia, direto no celular."
  },
  {
    icon: User,
    step: "02",
    title: "Login com CPF",
    description: "Digita o CPF e pronto. Sem complicação, sem senha."
  },
  {
    icon: Scissors,
    step: "03",
    title: "Escolhe o serviço",
    description: "Seleciona o corte desejado no seu catálogo completo."
  },
  {
    icon: Calendar,
    step: "04",
    title: "Agenda o horário",
    description: "Escolhe o dia e horário disponível e confirma."
  }
];

const barberSteps = [
  {
    icon: User,
    step: "01",
    title: "Acesse como barbeiro",
    description: "Login com seu CPF no painel do profissional."
  },
  {
    icon: Clock,
    step: "02",
    title: "Configure seus horários",
    description: "Defina quando você está disponível para atender."
  },
  {
    icon: Search,
    step: "03",
    title: "Acompanhe os agendamentos",
    description: "Veja todos os clientes do dia em tempo real."
  },
  {
    icon: CreditCard,
    step: "04",
    title: "Controle seu faturamento",
    description: "Acompanhe quanto você ganhou e o histórico completo."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
            Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Simples para <span className="text-gradient-gold">todos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tanto o cliente quanto o barbeiro têm uma experiência fácil e rápida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Client Flow */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <User className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl">Para o Cliente</h3>
            </div>
            <div className="space-y-6">
              {clientSteps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary">{step.step}</span>
                      <h4 className="font-display text-lg text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Barber Flow */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <Scissors className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl">Para o Barbeiro</h3>
            </div>
            <div className="space-y-6">
              {barberSteps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border group-hover:border-primary/50 flex items-center justify-center transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary">{step.step}</span>
                      <h4 className="font-display text-lg text-foreground">{step.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
