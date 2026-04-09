"use client";

import { identity } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {

  return (
    <section
      id="about"
      className="pt-32 pb-20 px-8 min-h-screen flex items-center bg-surface"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h1 className="text-6xl md:text-7xl font-[family-name:var(--font-heading)] font-bold text-primary tracking-tighter leading-none mb-4">
            {identity.firstName}
            <br />
            {identity.lastName}
          </h1>
          <p className="text-2xl font-[family-name:var(--font-heading)] text-primary-container dark:text-primary-fixed-dim font-medium">
            {identity.title}
          </p>
        </motion.div>

        {/* Center Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-surface-container-highest shadow-xl">
            <Image
              alt={`${identity.firstName} ${identity.lastName}`}
              className="w-full h-full object-cover"
              src="/moi.webp"
              fill
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="order-3 text-center lg:text-right"
        >
          <div className="bg-surface-container-low p-8 rounded-xl border-l-4 lg:border-l-0 lg:border-r-4 border-primary shadow-sm">
            <p className="text-lg text-on-surface-variant leading-relaxed font-medium">
              {identity.about.split("alternance")[0]}alternance pour la
              periode de{" "}
              <span className="text-primary font-bold">
                Sept. 2026 a Sept. 2027
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
