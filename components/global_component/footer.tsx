"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yellow-500 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 text-center justify-center gap-6">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-2">ABU-KU Agro Farms</h3>
          <p>
            Supporting small farmers and delivering high-quality cardamom with centralized storage, processing, and distribution.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p>Phone: 8125230807</p>
          <p>Email: info@v2r-vision.com</p>
          <p>Promoter: Giogi John</p>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-yellow-300 pt-4 text-sm">
        © {new Date().getFullYear()} ABU-KU Agro Farms. All rights reserved.
      </div>
    </footer>
  );
}
