"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    // Motion variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  return (
    <main className="py-12 mx-auto space-y-16">
      {/* Hero Section with Background Image */}
      <motion.section
        className="relative text-center text-white py-40 rounded-xl shadow-lg bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: "url('/img/aboutbg.webp')" }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero content */}
        <div className="relative z-10 px-4 md:px-8">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ABU-KU Agro Farms
          </motion.h1>
          <motion.p
            className="text-md md:text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
Connecting small farmers to bigger opportunities through quality cardamom production and distribution.          </motion.p>
        </div>
      </motion.section>
      {/* About Description */}
      <motion.section
        className="bg-green-50 p-8 max-w-7xl mx-auto text-center rounded-2xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-xl text-gray-800 leading-relaxed">
          ABU-KU Agro Farms is a 6-acre cardamom farm dedicated to supporting small farmers and improving the supply chain for high-quality produce. We collect cardamom from surrounding farms, store it in our modern warehouses, and handle cleaning, grading, and packaging. Centralizing these activities ensures premium quality, fair pricing, and timely delivery to markets.
        </p>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Streamline manual processes, enhance productivity, and create value for both farmers and consumers.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Problems We Solve</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Lack of Storage – reducing 15–20% post-harvest losses.</li>
            <li>Manual Processing – improving quality through automation.</li>
            <li>Quality Loss – careful handling during transport preserves value.</li>
          </ul>
        </div>
      </motion.section>

      {/* Solutions */}
      <motion.section
        className="bg-green-50 p-8 rounded-2xl mx-auto max-w-7xl shadow-lg"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Solutions</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Efficient Storage – secure warehouses to minimize post-harvest losses.</li>
          <li>Centralized Collection & Processing – cleaning, grading, packaging, and distribution support.</li>
          <li>Farmer Empowerment – fair pricing and income stability for small farmers.</li>
        </ul>
      </motion.section>

      {/* Scale-Up Strategy */}
      <motion.section
        className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Scale-Up Strategy</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Farmer Network Expansion – onboard more small farms.</li>
            <li>Warehouse Growth – additional storage facilities.</li>
            <li>Processing Upgrade – invest in advanced machinery.</li>
            <li>Brand Building – strengthen presence to attract larger buyers.</li>
          </ul>
        </div>

        <div className="bg-yellow-100 relative p-6 rounded-2xl shadow-lg flex items-center justify-center">
          <Image
            src="/img/12.png"
            alt="Cardamom Farm"
            fill
            className="rounded-xl object-center object-cover shadow-md"
          /> 
        </div>
      </motion.section>
    </main>
  );
}
