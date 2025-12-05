// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// const products = [
//   {
//     title: "Whole Green Cardamom",
//     grade: "7.5mm – 9mm Grades",
//     desc: "High-quality, freshly harvested cardamom cleaned, dried and graded.",
//     img: "/img/cardamom1.png",
//   },
//   {
//     title: "Cardamom Powder",
//     grade: "Fine & Premium Grind",
//     desc: "Pure spice powder with no fillers — ideal for retail & food industry.",
//     img: "/img/cardamom-powder.png",
//   },
//   {
//     title: "Processed Spice Powders",
//     grade: "Blends & Pure Spices",
//     desc: "Cinnamon, clove, pepper blends and custom spice mixes.",
//     img: "/img/spice-powders.png",
//   },
//   {
//     title: "Bulk & Private Label Supply",
//     grade: "1kg – 50kg Packaging",
//     desc: "Custom branding and wholesale supply for businesses.",
//     img: "/img/private-label.png",
//   },
// ];

// export default function ProductsPage() {
//   return (
//     <div className="pt-20">

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-20 text-center">
//         <h1 className="text-4xl font-bold mb-3">Our Products</h1>
//         <p className="text-lg max-w-2xl mx-auto">
//           Premium cardamom and spice products sourced from trusted farmers.
//         </p>
//       </section>

//       {/* Product Grid */}
//       <section className="max-w-7xl mx-auto px-6 py-16">
//         <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
//           Product Categories
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {products.map((p, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
//             >
//               <div className="w-full h-52 relative mb-4">
//                 <Image
//                   src={p.img}
//                   alt={p.title}
//                   fill
//                   className="object-contain rounded-xl"
//                 />
//               </div>

//               <h3 className="text-xl font-semibold text-green-900">{p.title}</h3>
//               <p className="text-sm text-green-700 mt-1">{p.grade}</p>

//               <p className="text-gray-600 mt-3">{p.desc}</p>

//               <button className="mt-5 w-full py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition">
//                 Request Price
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Bulk Section */}
//       <section className="bg-green-50 py-20 text-center">
//         <h2 className="text-3xl font-bold text-green-900 mb-4">
//           Bulk & Private Label Supply
//         </h2>
//         <p className="max-w-3xl mx-auto text-gray-700">
//           We provide wholesale supply of cardamom and spice products for retailers,
//           brands, exporters, and e-commerce sellers. Fully customizable branding and packaging options.
//         </p>

//         <button className="mt-8 px-10 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 transition">
//           Contact for Bulk Pricing
//         </button>
//       </section>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductsPage() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  // Form values
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    message: "",
  });

  const products = [
    {
      id: 1,
      name: "Big Cardamom",
      desc: "High-quality, aromatic whole cardamom pods.",
      img: "/img/badielaichi2.webp",
    },
    {
      id: 2,
      name: "Cardamom Seeds",
      desc: "Premium seeds extracted from fresh cardamom.",
      img: "/img/badiIlayachi3.webp",
    },
    {
      id: 3,
      name: "Cardamom Powder",
      desc: "Finely ground cardamom for commercial & retail use.",
      img: "/img/a2.jpeg",
    },
  ];

  const openPopup = (item: any) => {
    setSelected(item);
    setOpen(true);
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const phone = "919664455006"; // 📌 YOUR OFFICIAL WHATSAPP NUMBER HERE

    const msg = `
🌿 *New Price Request*
-----------------------
📌 *Product:* ${selected?.name}
👤 *Name:* ${form.name}
📞 *Phone:* ${form.phone}
📧 *Email:* ${form.email}
📦 *Quantity:* ${form.quantity}
📝 *Message:* ${form.message}
-----------------------
Please respond to customer.
`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#F8FFF8] py-20 px-4">
     {/* Hero Section */}
      <section className=" relative text-white py-40 text-center bg-no-repeat bg-cover bg-center"
              style={{ backgroundImage: "url('/img/aboutbg.webp')" }}

      >
                <div className="absolute inset-0 bg-black/40 z-10"></div>
<div className=" relative z-20">

        <h1 className="text-4xl font-bold mb-3">Our Products</h1>
        <p className="text-lg max-w-2xl mx-auto">
           Premium cardamom and spice products sourced from trusted farmers.
         </p>
</div>
       </section>
      {/* PAGE TITLE
      <h1 className="text-4xl md:text-5xl font-bold text-center text-green-800 my-14">
        Our Products
      </h1> */}

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-30">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md shadow-black/50 hover:shadow-xl transition p-6"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={500}
              height={450}
              className="rounded-lg mx-auto min-h-[300px] max-h-[300px] hover:scale-105 transition-transform object-cover duration-500"
            />

            <h2 className="text-xl font-semibold mt-4 text-gray-800 text-center">
              {item.name}
            </h2>

            <p className="text-gray-600 text-sm mt-2 text-center">
              {item.desc}
            </p>

            <button
              onClick={() => openPopup(item)}
              className="mt-4 w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-lg"
            >
              Request Price
            </button>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-6 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl text-gray-700 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-green-700 text-center mb-2">
              Request Price
            </h2>
            <p className="text-center text-gray-600 mb-4">
              Product: <span className="font-semibold">{selected?.name}</span>
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                name="quantity"
                placeholder="Quantity (kg)"
                value={form.quantity}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 h-20"
              />

              <button
                type="submit"
                className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-800 transition"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
