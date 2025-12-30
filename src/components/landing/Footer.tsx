import { Scissors, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <Scissors className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl text-foreground">
                Barber<span className="text-primary">Pro</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm">
              O sistema de agendamento online que transforma a gestão da sua barbearia. 
              Mais organização, mais lucro, menos dor de cabeça.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-foreground mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#problemas" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Problemas
                </a>
              </li>
              <li>
                <a href="#solucao" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Solução
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-foreground mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary" />
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Facebook className="w-4 h-4 text-primary" />
                <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-muted-foreground text-sm">© 2026 BarberPro. Todos os direitos reservados.</p>
            <p className="text-muted-foreground text-sm">Desenvolvido por <a href="https://www.linkedin.com/in/victor-silva-01front/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Victor Silva</a></p>
          </div>
           <div className="flex items-center gap-6">
             <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
               Termos de Uso
             </a>
             <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
               Privacidade
             </a>
           </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
