"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GradingSection() {
  const grades = [
    { size: "8 mm", label: "Purple Grade", color: "bg-purple-700", scale: 1 },
    { size: "7.5 mm", label: "Pink Grade", color: "bg-pink-600", scale: 0.93 },
    { size: "7 mm", label: "Green Grade", color: "bg-green-700", scale: 0.87 },
    { size: "6.5 mm", label: "Orange Grade", color: "bg-orange-600", scale: 0.81 },
    { size: "6 mm", label: "Red Grade", color: "bg-red-600", scale: 0.75 },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-white text-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-green-800 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Graded to your Requirement
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        ‘One size doesn’t fit all’ is true in the case of cardamom as well. 
        Because of their multiple uses and benefits, cardamom pods of different 
        sizes are used in different applications. That is why <b>Abu-Ku Agro Farms</b> 
        cardamom is graded by size. However, the grading is never about quality. 
        Whatever the size, quality remains world class.
      </motion.p>

      {/* Grade Items */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center">
        {grades.map((grade, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className="mb-4"
              style={{
                transform: `scale(${grade.scale})`,
                transformOrigin: "center bottom",
              }}
            >
              <Image
                src="/img/6mm.png" // replace with correct image if you have multiple
                alt={grade.label}
                width={80}
                height={120}
              />
            </div>
            <span
              className={`${grade.color} text-white font-semibold px-4 py-1 rounded`}
            >
              {grade.size}
            </span>
            <p className="mt-2 text-sm font-medium text-gray-700">
              {grade.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
