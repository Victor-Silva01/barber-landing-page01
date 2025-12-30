import { XCircle, Clock, Users, MessageSquare, TrendingDown, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Clientes faltam sem avisar",
    description: "Você reserva o horário, se prepara, e o cliente simplesmente não aparece. Tempo e dinheiro jogados fora."
  },
  {
    icon: Clock,
    title: "Agenda desorganizada",
    description: "Papéis, cadernos, mensagens perdidas. Você não sabe quem vem, quando vem e o que vai fazer."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp lotado de mensagens",
    description: "Responder cliente o dia todo, marcar, desmarcar, confirmar. Parece que você trabalha mais no celular do que na cadeira."
  },
  {
    icon: Users,
    title: "Cliente esquece o horário",
    description: "Sem lembretes automáticos, o cliente simplesmente esquece e você fica esperando."
  },
  {
    icon: TrendingDown,
    title: "Perda de faturamento",
    description: "Cada horário vago é dinheiro perdido. E quando o cliente falta, você não pode cobrar nada."
  },
  {
    icon: AlertTriangle,
    title: "Falta de profissionalismo",
    description: "Seus concorrentes já estão usando sistemas modernos. Está na hora de você também."
  }
];

const ProblemsSection = () => {
  return (
    <section id="problemas" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
            Os Problemas
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Cansado de <span className="text-gradient-gold">perder dinheiro</span> com faltas e desorganização?
          </h2>
          <p className="text-muted-foreground text-lg">
            Se você se identifica com algum desses problemas, é hora de mudar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-gold/10 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl mb-2 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
