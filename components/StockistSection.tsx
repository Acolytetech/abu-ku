"use client";

export default function StockistSection() {
  return (
    <section className="my-24 w-full sm:max-w-7xl mx-auto px-2 md:px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-10">
        We Are Stockists Of Premium Agro & Agri Products
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-md overflow-hidden">
        <div className="marquee relative flex overflow-hidden gap-10">
          <div className="marquee-content flex gap-10 text-xl font-semibold text-green-700 whitespace-nowrap">
            <span>Black Pepper</span>
            <span>Cloves</span>
            <span>Nutmeg & Mace</span>
            <span>Dry Ginger</span>
            <span>Turmeric</span>
            <span>All Spices (Wholesale)</span>
                <span>Black Pepper</span>
            <span>Cloves</span>
            <span>Nutmeg & Mace</span>
            <span>Dry Ginger</span>
            <span>Turmeric</span>
            <span>All Spices (Wholesale)</span>
                <span>Black Pepper</span>
            <span>Cloves</span>
            <span>Nutmeg & Mace</span>
            <span>Dry Ginger</span>
            <span>Turmeric</span>
            <span>All Spices (Wholesale)</span>
          </div>

          {/* Duplicate for infinite loop */}
          {/* <div className="marquee-content flex gap-10 text-xl font-semibold text-green-700 whitespace-nowrap">
            <span>Black Pepper</span>
            <span>Cloves</span>
            <span>Nutmeg & Mace</span>
            <span>Dry Ginger</span>
            <span>Turmeric</span>
            <span>All Spices (Wholesale)</span>
               <span>Black Pepper</span>
            <span>Cloves</span>
            <span>Nutmeg & Mace</span>
            <span>Dry Ginger</span>
            <span>Turmeric</span>
            <span>All Spices (Wholesale)</span>
          </div> */}
            {/* Duplicate for infinite loop */}
          {/* <div className="marquee-content flex gap-10 text-xl font-semibold text-green-700 whitespace-nowrap">
            <span>Black Pepper</span>
            <span>Cloves</span>
            <span>Nutmeg & Mace</span>
            <span>Dry Ginger</span>
            <span>Turmeric</span>
            <span>All Spices (Wholesale)</span>
          </div> */}
        </div>
      </div>
    </section>
  );
}
