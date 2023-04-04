import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 sticky top-0 bg-slate-600 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex flex-col justify-between sm:flex-row">
        <Link href="/" className="text-white/90 no-underline hover:text-white">Dimitry 🏡</Link>
      </div>
    </nav>
  );
};

export default Navbar;