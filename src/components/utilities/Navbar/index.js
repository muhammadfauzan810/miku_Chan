"use client"; // Menandai ini sebagai komponen client

import { useState } from "react";
import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 shadow-lg p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Miku Chan</span>
            </div>

            {/* Tombol hamburger di sebelah kanan "Miku Chan" untuk tampilan mobile */}
            <div className="block lg:hidden ml-auto">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110">
                    {isOpen ? "✖️" : "☰"}
                </button>
            </div>

            {/* InputSearch ditampilkan di bawah "Miku Chan" untuk tampilan mobile */}
            <div className="block lg:hidden w-full mb-4">
                <InputSearch />
            </div>

            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} lg:block`}>
                <div className="text-sm lg:flex-grow flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
                    {["Home", "About", "Contact"].map((item) => (
                        <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="block text-teal-200 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
                            {item}
                        </Link>
                    ))}
                </div>

                <Link href="/login" className="ml-4">
                    <button className="bg-teal-600 text-white rounded-full py-2 px-6 transition duration-300 ease-in-out hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300 shadow-lg transform hover:scale-105">
                        Sign In
                    </button>
                </Link>
            </div>

            {/* InputSearch hanya ditampilkan di tampilan desktop */}
            <div className="hidden lg:block">
                <InputSearch />
            </div>
        </nav>
    );
};

export default Navbar;
