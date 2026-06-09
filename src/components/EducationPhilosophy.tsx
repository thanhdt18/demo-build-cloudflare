"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Heart } from "lucide-react";

const EducationPhilosophy = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-background">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Academic Background</p>
            <h2 className="text-4xl font-extrabold mb-10">Education</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-accent/20 space-y-12">
            {/* Entry 1 */}
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-background" />
              <h3 className="text-xl font-bold text-white mb-2">University of Information Technology</h3>
              <p className="text-secondary font-medium mb-1">Major: Information Technology</p>
              <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded text-accent text-sm font-bold">
                GPA: 2.9 / 4.0
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <p className="text-accent text-sm font-bold tracking-widest uppercase mb-4">Work Life</p>
            <h2 className="text-4xl font-extrabold mb-10">Philosophy</h2>
          </div>

          <div className="p-10 bg-surface border border-white/5 rounded-3xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:bg-accent/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="text-accent mb-6">
                <Heart className="w-10 h-10 fill-accent/20" />
              </div>
              <h3 className="text-2xl italic font-bold text-white mb-6 leading-tight">
                "We work for hobby and passion!"
              </h3>
              <p className="text-secondary text-lg leading-relaxed">
                My approach to development is driven by a genuine love for 
                technology and the joy of problem-solving. Every line of code is 
                an opportunity to create something meaningful.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationPhilosophy;
