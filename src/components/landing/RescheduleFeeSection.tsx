import { DollarSign, Shield, TrendingUp, AlertTriangle } from "lucide-react";

const RescheduleFeeSection = () => {
  return (
    <section id="diferencial" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
              Diferencial Exclusivo
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
              Taxa de <span className="text-gradient-gold">reagendamento</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              O cliente que remarcar ou cancelar em cima da hora paga uma taxa configurada por você. 
              Isso garante mais compromisso e reduz drasticamente as faltas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Você define o valor</h4>
                  <p className="text-muted-foreground text-sm">Configure a taxa de acordo com sua realidade. R$5, R$10, R$20... você decide.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Proteção contra prejuízo</h4>
                  <p className="text-muted-foreground text-sm">Mesmo que o cliente cancele, você não sai no prejuízo. Tempo é dinheiro.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 bg-card/50 rounded-xl border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">Clientes mais comprometidos</h4>
                  <p className="text-muted-foreground text-sm">Quando existe uma consequência, o cliente pensa duas vezes antes de faltar.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-gold/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl">Aviso ao Cliente</h3>
              </div>
              
              <div className="space-y-4 text-sm">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-muted-foreground">
                    "Atenção: reagendamentos ou cancelamentos com menos de <span className="text-primary font-semibold">2 horas</span> de antecedência geram uma taxa de <span className="text-primary font-semibold">R$ 15,00</span>."
                  </p>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <span className="text-foreground">Antes:</span>
                  <span className="text-muted-foreground line-through">Cliente faltava sem avisar</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <span className="text-foreground font-semibold">Depois:</span>
                  <span className="text-primary font-semibold">98% de presença</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-center text-muted-foreground text-sm">
                  Configure a taxa e o tempo mínimo do jeito que funcionar melhor para você.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RescheduleFeeSection;
