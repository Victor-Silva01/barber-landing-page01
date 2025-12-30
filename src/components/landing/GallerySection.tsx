import haircut1 from "@/assets/haircut-1.jpg";
import haircut2 from "@/assets/haircut-2.jpg";
import haircut3 from "@/assets/haircut-3.jpg";
import haircut4 from "@/assets/haircut-4.jpg";

const cuts = [
  { image: haircut1, name: "Fade Clássico", price: "R$ 45" },
  { image: haircut2, name: "Barba Completa", price: "R$ 35" },
  { image: haircut3, name: "Pompadour", price: "R$ 55" },
  { image: haircut4, name: "Degradê", price: "R$ 40" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full">
            Galeria de Cortes
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Mostre seu <span className="text-gradient-gold">trabalho</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cadastre seus cortes com fotos, preços e tempo de duração. O cliente vê e escolhe antes mesmo de chegar.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cuts.map((cut, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={cut.image}
                alt={cut.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg text-foreground">{cut.name}</h3>
                <p className="text-primary font-semibold">{cut.price}</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                30 min
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          * Exemplo ilustrativo. Você cadastra seus próprios serviços com preços e fotos personalizados.
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
