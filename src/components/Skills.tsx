import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 75 },
        { name: "TypeScript", level: 60 },
        { name: "Next.js", level: 65 },
        { name: "Tailwind CSS", level: 65 },
        { name: "Framer Motion", level: 60 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 50 },
        { name: "Express", level: 55 },
        { name: "PostgreSQL", level: 50 },
        { name: "MongoDB", level: 55 },
        { name: "GraphQL", level: 55 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 50 },
        { name: "Docker", level: 55 },
        { name: "AWS", level: 50 },
        { name: "Figma", level: 50 },
        { name: "CI/CD", level: 55 },
      ],
    },
  ];

  const techLogos = [
    "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS", "Next.js", "Tailwind"
  ];

  return (
    <section id="skills" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// Habilidades</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Mi <span className="text-gradient">Stack Tecnológico</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Domino un amplio conjunto de tecnologías modernas que me permiten crear soluciones completas y escalables.
          </p>
        </motion.div>

        {/* Animated tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden py-8 mb-16"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-12 animate-scroll">
            {[...techLogos, ...techLogos].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 glass rounded-xl text-xl font-mono text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * skillIndex }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
