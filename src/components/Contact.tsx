import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  // Estado para saber si se está enviando
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); 

    try {
     
      const response = await fetch("https://formspree.io/f/mlgrbpgn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "¡Mensaje enviado!",
          description: "Gracias por contactarme. Te responderé pronto.",
        });
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar el mensaje. Intenta de nuevo.",
          variant: "destructive", 
        });
      }
    } catch (error) {
      toast({
        title: "Error de conexión",
        description: "Verifica tu conexión a internet.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false); 
    }
  };


  const socials = [
    { icon: Github, href: "https://github.com/AndiReid", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:Andiux0428@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">// Contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            ¿Tienes un <span className="text-gradient">proyecto</span> en mente?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Estoy siempre abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {}
            <div>
              <h3 className="text-2xl font-bold mb-4">Hablemos</h3>
              <p className="text-muted-foreground">
                Si tienes una pregunta, propuesta de proyecto o simplemente quieres saludar, no dudes en contactarme.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">Andiux0428@gmail.com</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">Guayaquil - Ecuador</p>
                </div>
              </motion.div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Sígueme en redes</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Nombre</label>
                <input
                  type="text"
                  name="name" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all bg-transparent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input
                  type="email"
                  name="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all bg-transparent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Mensaje</label>
                <textarea
                  name="message" 
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all bg-transparent resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              
              {/* Botón con estado de carga */}
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting} 
              >
                <Send className="mr-2 w-4 h-4" />
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;