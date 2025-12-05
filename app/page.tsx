"use client";

import FarmWarehouseSection from "@/components/FarmWarehouseSection";
import GradingSection from "@/components/GradingSection";
import HeroSlider from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import StockistSection from "@/components/StockistSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

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

  <HeroSlider
        slides={[
          {
            title: "ABU-KU Agro Farms",
            subtitle:
              "Supporting small farmers and delivering high-quality cardamom with centralized storage and distribution.",
            buttonLabel: "Know More",
            buttonLink: "/about",
            background: "/img/bg-11.jpg",
          },
          // {
          //   title: "Premium Cardamom Processing",
          //   subtitle:
          //     "Modern grading, drying, and packaging infrastructure for farmers.",
          //   buttonLabel: "Contact Us",
          //   buttonLink: "/contact",
          //   background: "/img/bg-22.jpg",
          // },
          // {
          //   title: "Empowering Rural Farmers",
          //   subtitle:
          //     "Transparent pricing, fair procurement, and quality-driven practices.",
          //   buttonLabel: "Join Us",
          //   buttonLink: "/contact",
          //   background: "/img/f1.webp",
          // },
        ]}
      />

<FarmWarehouseSection/>
     {/* About Section */}
<motion.section
  className="py-20 px-4 md:px-0  mx-auto bg-green-50 -mt-10"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-2xl md:text-3xl text-green-800 font-bold my-12 text-center">
    Why Partner With Us
  </h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {[
      {
        title: "Farmer Empowerment",
        desc: "Reliable collection and fair pricing for small farmers.",
                img: "/img/a2.jpeg",

      },
      {
        title: "Modern Storage Solutions",
        desc: "Warehouses minimizing post-harvest losses and preserving quality.",
        img: "/img/badiIlayachi3.webp",
      },
      {
        title: "End-to-End Processing",
        desc: "Cleaning, grading, and packaging market-ready cardamom.",
        img: "/img/badielaichi2.webp",
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
        <div className="relative w-full h-60 mb-4">
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

{/* <StockistSection/> */}
      <GradingSection/>
<ProductSection/>
      {/* Products Section */}
      {/* <motion.section
        className="my-24 px-2 w-full sm:max-w-6xl mx-auto md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold my-12 text-center text-green-800">Our Products & Services</h2>
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
      </motion.section> */}
<WhyChooseUs/>
      {/* Market Section */}
 

      {/* Contact Section */}
      <motion.section
        className=" px-4 md:px-0 relative py-10 md:pb-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
             <motion.section
        className="text-center my-12 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">Market Opportunity</h2>
        <p className="max-w-2xl mx-auto">
          The global cardamom market was USD 890.5M in 2024 and is expected to reach USD 1,655.7M by 2035, growing at a CAGR of 5.8%.
        </p>
      </motion.section>
{/* <img src='/img/a.png' alt='Contact Us' className="hidden md:block md:absolute top-0 left-0 z-1 w-[30%] h-full object-cover rounded-xl mb-8"/> */}
{/* <img src='/img/badielaichi2.webp' alt='Contact Us' className="hidden md:block md:absolute top-0 right-0 z-1 w-[30%] h-full object-cover rounded-xl mb-8"/> */}

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-green-800">Contact Us</h2>
     <div className="max-w-6xl mx-auto bg-green-50 p-6 rounded-xl  shadow-md grid gap-6 md:grid-cols-2 relative z-20">
  {/* Contact Info */}
  <motion.div
    className="relative text-white text-center items-center flex flex-col justify-center rounded-xl overflow-hidden"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/img/badielaichi2.webp')",
        backgroundAttachment: "fixed",
      }}
    ></div>

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Content on top */}
    <div className="relative z-10 p-6 flex flex-col gap-4">
      <h3 className="font-bold text-xl">Get in Touch</h3>
      <p>V2R Vision Advisory and Consulting.</p>
      <p>
        <span className="font-semibold">Phone:</span> +91 8125230807
      </p>
      <p>
        <span className="font-semibold">Email:</span> info@abukuagro.com
      </p>
    </div>
  </motion.div>

  {/* Contact Form */}
  <motion.form
    className="space-y-4"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div>
      <label className="block font-semibold mb-1" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
        placeholder="Your Name"
      />
    </div>
    <div>
      <label className="block font-semibold mb-1" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
        placeholder="Your Email"
      />
    </div>
    <div>
      <label className="block font-semibold mb-1" htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        rows={4}
        className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-800"
        placeholder="Your Message"
      ></textarea>
    </div>
    <button
      type="submit"
      className="bg-green-800 text-white font-semibold px-6 py-2 rounded-md hover:bg-green-600 transition"
    >
      Send Message
    </button>
  </motion.form>
</div>

      </motion.section>

    </main>
  );
}
