import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "LaBellaPizza - Sitio Web Comercial (Freelance)",
      description: "Desarrollo Full-Cycle para un cliente gastronómico real. Digitalización del menú y optimización UX mediante botones de acción (CTA) para pedidos directos.",
      image: "/images/LaBellaPizzaS.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/AndiReid/LabellaPizza",
      live: "https://labellapizzaeats.com/",
      featured: true,
    },
    {
      title: "IVIA (Información Verídica de la IA) - Proyecto Académico",
      description: "Portal educativo interactivo sobre historia y aplicaciones de la IA. Proyecto de grado calificado con excelencia, enfocado en diseño visual y estructuración.",
      image: "/images/IVIAS.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/AndiReid/IVIA-Proyecto-de-grado-del-colegio",
      live: "#",
      featured: true,
    },

  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// Proyectos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Trabajo <span className="text-gradient">Destacado</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mi experiencia en desarrollo fullstack y diseño de interfaces.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative group overflow-hidden rounded-2xl ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="p-2 glass rounded-lg hover:bg-primary/20 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                <span className="text-primary font-mono text-sm">Proyecto destacado</span>
                <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                <div className="glass rounded-xl p-6">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;
