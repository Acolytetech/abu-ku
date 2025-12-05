"use client";

import { useState } from "react";
import Image from "next/image";

// ------------------ TYPES ------------------

interface Product {
  id: number;
  name: string;
  desc: string;
  img: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  quantity: string;
  message: string;
}

// ------------------ COMPONENT ------------------

export default function ProductsPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Product | null>(null);

  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    message: "",
  });

  const products: Product[] = [
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

  // ----------- POPUP OPEN ----------------
  const openPopup = (item: Product) => {
    setSelected(item);
    setOpen(true);
  };

  // ----------- FORM CHANGE ----------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ----------- SUBMIT (SEND WHATSAPP) ---------------
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phone = "919664455006"; // YOUR WHATSAPP NUMBER

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

  // ------------------ UI ------------------

  return (
    <div className="min-h-screen bg-[#F8FFF8] py-20 px-4">

      {/* HERO SECTION */}
      <section
        className="relative text-white py-40 text-center bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: "url('/img/aboutbg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20">
          <h1 className="text-4xl font-bold mb-3">Our Products</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Premium cardamom and spice products sourced from trusted farmers.
          </p>
        </div>
      </section>

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

            <p className="text-gray-600 text-sm mt-2 text-center">{item.desc}</p>

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
