"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-xs font-bold mb-6"
          >
            AVAILABLE FOR NEW PROJECT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
          >
            Hello, I'm <span className="text-accent">Thanh!</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-white/90 mb-6"
          >
            Website development programmer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-secondary max-w-lg mb-10 text-lg leading-relaxed"
          >
            Hoping to participate in large projects to learn experience and skills.
            I specialize in building high-performance digital experiences that merge code with creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <button className="bg-accent text-background px-8 py-3 rounded-md font-bold hover:shadow-[0_0_20px_rgba(0,242,234,0.4)] transition-all">
              Hire Me
            </button>
            <button className="border border-accent text-accent px-8 py-3 rounded-md font-bold hover:bg-accent/5 transition-all">
              About Me
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[530px]">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full" />

            {/* Image Container with Border */}
            <div className="relative w-full h-full border-2 border-accent/20 rounded-2xl overflow-hidden shadow-2xl">
              {/* Using a placeholder image since I don't have the original asset */}
              <div className="w-full h-full bg-surface flex items-center justify-center text-accent/50">
                {/* Ideally we would have real image path here */}
                <Image
                  src="/thanh-hero.png"
                  alt="Thanh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
