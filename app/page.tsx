"use client";

import GradingSection from "@/components/GradingSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
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
    <main className="py-12">

      {/* Hero Section with Background Image */}
      <motion.section
        className="relative text-center text-white py-50 rounded-xl shadow-lg mb-12 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/img/Cardamom-green.jpg')" }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

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
            Supporting small farmers and delivering high-quality cardamom with centralized storage, processing, and distribution.
          </motion.p>
        </div>
      </motion.section>

     {/* About Section */}
<motion.section
  className="my-20 px-4 md:px-0 sm:max-w-6xl mx-auto"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold my-12 text-center">
    Why Partner With Us
  </h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
    {[
      {
        title: "Farmer Empowerment",
        desc: "Reliable collection and fair pricing for small farmers.",
        img: "/img/green-cardamom.webp",
      },
      {
        title: "Modern Storage Solutions",
        desc: "Warehouses minimizing post-harvest losses and preserving quality.",
        img: "/img/Cardamom-green1.jpg",
      },
      {
        title: "End-to-End Processing",
        desc: "Cleaning, grading, and packaging market-ready cardamom.",
        img: "/img/Cardamom-green.jpg",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      >
        {/* Image container must be relative with fixed height */}
        <div className="relative w-full h-40 mb-4">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <h3 className="font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.section>

      <GradingSection/>

      {/* Products Section */}
      <motion.section
        className="my-24 px-2 w-full sm:max-w-6xl mx-auto md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-semibold my-12 text-center text-yellow-400">Our Products & Services</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Cardamom", desc: "Cleaned, graded, and packaged for retail and wholesale." },
            { title: "Packaged Spice Products", desc: "Processed into powder, blends, and spice mixes." },
            { title: "Bulk & Private-Label Supply", desc: "For B2B buyers with reliable delivery." },
            { title: "Farmer Support", desc: "Collection, storage, processing, and distribution support." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Market Section */}
      <motion.section
        className="text-center mb-12 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400">Market Opportunity</h2>
        <p className="max-w-2xl mx-auto">
          The global cardamom market was USD 890.5M in 2024 and is expected to reach USD 1,655.7M by 2035, growing at a CAGR of 5.8%.
        </p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="mb-12 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-yellow-400">Contact Us</h2>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md grid gap-6 md:grid-cols-2">
          
          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bold text-lg">Get in Touch</h3>
            <p>V2R Vision Advisory and Consulting.</p>
            <p><span className="font-semibold">Phone:</span> +91 83023 94273</p>
            <p><span className="font-semibold">Email:</span> info@abukuagro.com</p>
            {/* <p><span className="font-semibold">Address:</span> 71A, Street 2, First Block, Setia Colony, Sriganganagar, Rajasthan</p> */}
            {/* <p><span className="font-semibold">Instagram:</span> @vinod.choudhary777</p> */}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </motion.section>

    </main>
  );
}
