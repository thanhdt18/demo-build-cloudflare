"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PenTool, 
  Monitor, 
  Layers, 
  Code2, 
  BarChart3, 
  Megaphone 
} from "lucide-react";

const services = [
  {
    title: "Graphic Design",
    description: "Creating compelling visual identities and brand assets that resonate with audiences across all platforms.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Web Design",
    description: "Designing modern, responsive, and user-centric websites that provide seamless experiences on every device.",
    icon: <Monitor className="w-6 h-6" />,
  },
  {
    title: "UI/UX Design",
    description: "Focusing on intuitive workflows and accessible interfaces to enhance user satisfaction and engagement.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Frontend Development",
    description: "Translating complex designs into pixel-perfect, interactive frontend code using modern frameworks.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "Business Analysis",
    description: "Bridging the gap between business needs and technical solutions through rigorous data and requirement analysis.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Digital Marketing",
    description: "Strategizing and executing digital campaigns to boost online presence and reach target demographics.",
    icon: <Megaphone className="w-6 h-6" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold tracking-widest mb-4 uppercase"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Service I Provide
          </motion.h2>
          <div className="flex justify-center gap-2 mt-6">
             <div className="w-1 h-1 bg-accent/50 rounded-full" />
             <div className="w-1 h-1 bg-accent rounded-full" />
             <div className="w-1 h-1 bg-accent/50 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-10 bg-surface border border-white/5 rounded-2xl transition-all hover:border-accent/30 group"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-background transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
