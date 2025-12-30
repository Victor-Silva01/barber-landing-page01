import { 
  Calendar, 
  UserCheck, 
  Scissors, 
  History, 
  Settings, 
  DollarSign, 
  Bell, 
  Smartphone 
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamento Online 24h",
    description: "Seus clientes agendam direto pelo celular, a qualquer hora, sem precisar te mandar mensagem."
  },
  {
    icon: UserCheck,
    title: "Login Simples com CPF",
    description: "Cliente e barbeiro acessam com CPF. Sem senha complicada, sem cadastro demorado."
  },
  {
    icon: Scissors,
    title: "Catálogo de Cortes",
    description: "Cadastre seus serviços com fotos, preços e tempo de duração. O cliente escolhe o que quer."
  },
  {
    icon: History,
    title: "Histórico Completo",
    description: "Veja todos os cortes anteriores do cliente. Saiba exatamente o que ele gosta."
  },
  {
    icon: Settings,
    title: "Controle da Agenda",
    description: "Defina seus horários, dias de folga e pausas. Você tem o controle total."
  },
  {
    icon: DollarSign,
    title: "Taxa de Reagendamento",
    description: "Configure uma taxa para quem reagenda em cima da hora. Mais compromisso do cliente."
  },
  {
    icon: Bell,
    title: "Lembretes Automáticos",
    description: "O cliente recebe lembrete antes do horário. Menos esquecimentos, menos faltas."
  },
  {
    icon: Smartphone,
    title: "100% Mobile",
    description: "Funciona perfeitamente no celular. Você gerencia tudo na palma da mão."
  }
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
            A Solução
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Tudo que você precisa em <span className="text-gradient-gold">um só lugar</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um sistema completo pensado especialmente para barbearias. Simples, rápido e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-shadow">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
