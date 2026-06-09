"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface border border-white/5 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
              Let's build something <br />
              <span className="text-accent underline decoration-accent/30 underline-offset-8">exceptional</span> together.
            </h2>
            
            <p className="text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Please contact me if you feel the need! I'm currently open for 
              freelance opportunities and full-time positions.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-background px-10 py-4 rounded-xl font-black text-lg tracking-widest hover:shadow-[0_0_30px_rgba(0,242,234,0.3)] transition-all uppercase"
              >
                HIRE ME
              </motion.button>
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white font-bold text-lg group-hover:text-accent transition-colors">
                  raykayn01@gmail.com
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
