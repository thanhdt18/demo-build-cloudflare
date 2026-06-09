"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { name: "UI/UX Design", level: 80 },
    { name: "Web Design", level: 75 },
    { name: "HTML/CSS", level: 90 },
    { name: "JS / NodeJs", level: 95 },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Photo Container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative aspect-square w-full max-w-[500px] rounded-3xl overflow-hidden group">
            <Image
              src="/thanh-gitar.png"
              alt="Thanh Profile"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Blur overlay like in image */}
            <div className="absolute inset-0 bg-accent/10 backdrop-blur-[2px]" />
          </div>
        </motion.div>

        {/* content */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-bold tracking-widest mb-4"
          >
            ABOUT ME
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold mb-8"
          >
            Why You Hire Me?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary mb-10 text-lg leading-relaxed"
          >
            Desiring to become a Website development programmer specialized and
            proficient in modern technology stacks. I aim to work in professional
            environments where I can contribute to complex systems and access
            cutting-edge technologies.
          </motion.p>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white tracking-wide">{skill.name}</span>
                  <span className="text-secondary text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className="h-full bg-accent relative"
                  >
                    <div className="absolute top-0 bottom-0 right-0 w-2 shadow-[0_0_10px_#00f2ea]" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
