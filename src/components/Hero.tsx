import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const codeSnippet = `const developer = {
  name: "Marcos Andrés Granda Canto",
  role: "Fullstack Developer",
  passion: "Crear experiencias web increíbles",
  stack: ["React", "Node.js", "TypeScript"]
};`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      
      {/* 1. CAPA DE FONDO (Blobs animados) */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border/10 rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      {/* 2. CAPA DEL LOGO (Marca de agua independiente) */}
      {/* Esta capa está separada para asegurar que se vea siempre */}
      <img 
        src="/images/logo-watermark.png" 
        alt="Logo Watermark" 
        className="
          absolute 
          pointer-events-none select-none z-0
          
          /* ESTILOS BASE (Móvil) */
          /* Centrado, tamaño medio y opacidad visible */
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[350px] opacity-20
          
          /* ESTILOS PC (Pantallas grandes) */
          /* Se mueve a la derecha, se hace gigante */
          lg:left-[85%] lg:w-[1000px] lg:opacity-30
        "
      />

      {/* 3. CAPA DE CONTENIDO (Texto y Código) */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Textos */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              <span className="text-muted-foreground">Disponible para proyectos</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold leading-tight"
              >
                Hola, soy{" "}
                <span className="text-gradient">AndiUX</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-lg"
              >
                Desarrollador Fullstack especializado en crear experiencias web modernas e innovadoras.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild className="to-[hsl(165.76,89.68%,69.61%)]">
                <a href="#projects">Ver proyectos</a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <a href="#contact">Contactar</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <a href="https://github.com/AndiReid" className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group">
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/marcos-granda-4a4a5b280/" className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="mailto:andiux0428@gmail.com?subject=Consulta%20desde%20tu%20Portafolio&body=Hola%20Marcos..."
                className="p-3 glass rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Bloque de Código */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              
              {/* Fondo brillante (Detrás del código) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 z-0" />

              {/* Contenedor del código */}
              <div className="relative glass rounded-2xl p-6 overflow-hidden z-20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-4 text-xs text-muted-foreground font-mono">developer.ts</span>
                </div>
                <pre className="font-mono text-sm">
                  <code>
                    {codeSnippet.split('\n').map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="text-muted-foreground"
                      >
                        <span className="text-muted-foreground/50 mr-4">{i + 1}</span>
                        {line.includes('const') && (
                          <>
                            <span className="text-[hsl(166,100%,50.47%)]">const</span>
                            {line.replace('const', '')}
                          </>
                        )}
                        {line.includes(':') && !line.includes('const') && (
                          <>
                            <span className="text-primary">{line.split(':')[0]}</span>
                            <span className="text-muted-foreground">:</span>
                            <span className="text-green-400">{line.split(':')[1]}</span>
                          </>
                        )}
                        {!line.includes(':') && !line.includes('const') && line}
                      </motion.div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Indicador de Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;