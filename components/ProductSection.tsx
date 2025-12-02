"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

interface ProductItem {
  title: string;
  desc: string ;
}

const products: ProductItem[] = [
  {
    title: "Cardamom",
    desc: "Cleaned, graded, and packaged for retail and wholesale.",
  },
  {
    title: "Packaged Spice Products",
    desc: "Processed into powder, blends, and spice mixes.",
  },
  {
    title: "Bulk & Private-Label Supply",
    desc: "For B2B buyers with reliable delivery.",
  },
  {
    title: "Farmer Support",
    desc: "Collection, storage, processing, and distribution support.",
  },
//   {
//     title: "Stockist – Agro & Agri Products",
//     desc: (
//       <ul className="list-disc ml-5 space-y-1">
//         <li>Black Pepper</li>
//         <li>Cloves</li>
//         <li>Nutmeg & Mace</li>
//         <li>Dry Ginger</li>
//         <li>Turmeric</li>
//         <li>All Spices (Wholesale)</li>
//       </ul>
//     ),
//   },
];

export default function ProductSection() {
  return (
    <motion.section
      className="my-24 px-2 w-full sm:max-w-6xl mx-auto md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <h2 className="text-2xl md:text-3xl font-bold my-12 text-center text-green-800">
        Our Products & Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="font-bold mb-2">{item.title}</h3>
            <div className="text-gray-700">
              {typeof item.desc === "string" ? item.desc : item.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
