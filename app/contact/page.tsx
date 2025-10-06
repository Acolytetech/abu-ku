"use client";

import { Phone, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto pt-40">
      {/* Page Heading */}
      <motion.h1
        className="text-5xl font-extrabold text-center text-green-800 my-12 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        We’d love to hear from you! Whether it’s an inquiry, a partnership
        opportunity, or a product order — feel free to reach out.
      </motion.p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Phone */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
        >
          <Phone className="mx-auto h-10 w-10 text-green-800 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Phone</h2>
          <p className="text-gray-600">8125230807</p>
        </motion.div>

        {/* Email */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.2 }}
        >
          <Mail className="mx-auto h-10 w-10 text-green-800 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Email</h2>
          <p className="text-gray-600">info@v2r-vision.com</p>
        </motion.div>

        {/* Promoter */}
        <motion.div
          className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.05 }}
          transition={{ delay: 0.3 }}
        >
          <User className="mx-auto h-10 w-10 text-green-800 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Promoter</h2>
          <p className="text-gray-600">Giogi John</p>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 bg-green-50 p-8 rounded-2xl text-center shadow-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-green-800 mb-4">
          Let’s Work Together
        </h3>
        <p className="text-gray-700 mb-6">
          Have a question or want to collaborate? We’re just a message away!
        </p>
        <a
          href="mailto:info@v2r-vision.com"
          className="inline-block bg-green-800 text-white px-6 py-3 rounded-xl font-medium shadow hover:bg-green-900 transition-colors"
        >
          Send an Email
        </a>
      </motion.div>
    </main>
  );
}
