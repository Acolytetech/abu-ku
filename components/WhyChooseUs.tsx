"use client";

import { motion } from "framer-motion";
import { Leaf, Warehouse, Package } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Empowering Farmers",
      desc: "We ensure small farmers receive fair prices and dependable support for their harvests, helping them grow sustainably.",
      icon: <Leaf className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Advanced Storage Facilities",
      desc: "Our modern warehouses reduce post-harvest losses and maintain the highest quality of cardamom from farm to market.",
      icon: <Warehouse className="w-8 h-8 text-green-700" />,
    },
    {
      title: "Comprehensive Processing",
      desc: "From cleaning and grading to packaging, we prepare cardamom that’s ready to meet market standards.",
      icon: <Package className="w-8 h-8 text-green-700" />,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-green-50">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose ABU-KU Agro Farms
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
