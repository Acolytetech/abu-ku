"use client";

import Image from "next/image";

export default function FarmWarehouseSection() {
  return (
    <section className="my-24 w-full sm:max-w-6xl mx-auto px-2 md:px-0">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-12">
        Our Farm & Warehouse
      </h2>

      {/* Farm Images */}
      <div className="mb-16">
        {/* <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">
          Our Farms
        </h3> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
          {/* Farm Image 1 */}
          <div className="relative w-full h-60 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-lg">
            <Image 
              src="/img/f1.webp"
              alt="Farm Image 1"
              fill
              className="object-cover object-center rounded-xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* Farm Image 2 */}
          <div className="relative w-full h-60 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-lg">
            <Image 
              src="/img/f2.jpg"
              alt="Farm Image 2"
              fill
              className="object-cover object-center rounded-xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* Farm Image 3 */}
          <div className="relative w-full h-60 sm:h-72 md:h-80 overflow-hidden rounded-xl shadow-lg">
            <Image 
              src="/img/f4.jpg"
              alt="Farm Image 3"
              fill
              className="object-cover object-center rounded-xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>

      {/* Warehouse Section */}
      <div>
        {/* <h3 className="text-xl md:text-2xl font-semibold text-green-700 mb-4">
          Warehouse
        </h3> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Warehouse Image 1 */}
          <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-xl shadow-lg">
            <Image 
              src="/img/f3.jpg"
              alt="Warehouse 1"
              fill
              className="object-cover object-center rounded-xl hover:scale-105 transition duration-500"
            />
          </div>

          {/* Warehouse Image 2 */}
          <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-xl shadow-lg">
            <Image 
              src="/img/f6.png"
              alt="Warehouse License 2"
              fill
              className="object-cover object-center rounded-xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
