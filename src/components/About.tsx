import { motion } from "framer-motion";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Escribo código limpio, mantenible y escalable siguiendo las mejores prácticas.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Diseño interfaces intuitivas y atractivas centradas en la experiencia del usuario.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizo cada proyecto para garantizar velocidad y rendimiento excepcional.",
    },
    {
      icon: Zap,
      title: "Modern Stack",
      description: "Utilizo las tecnologías más modernas y eficientes del ecosistema web.",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-primary font-mono text-sm">// Sobre mí</span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Creando{" "}
              <span className="text-gradient">experiencias digitales</span>{" "}
              memorables
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Soy un desarrollador fullstack apasionado por transformar ideas en productos digitales excepcionales. Con experiencia en tecnologías frontend y backend, me especializo en crear aplicaciones web modernas y escalables.
              </p>
              <p>
                Mi enfoque combina código limpio con diseño intuitivo, siempre buscando el equilibrio perfecto entre funcionalidad y estética.
              </p>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="text-4xl font-bold text-gradient">1+</span>
                  <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="text-4xl font-bold text-gradient">20+</span>
                  <p className="text-sm text-muted-foreground mt-1">Proyectos completados</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <span className="text-4xl font-bold text-gradient">15+</span>
                  <p className="text-sm text-muted-foreground mt-1">Clientes satisfechos</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-6 glass rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
