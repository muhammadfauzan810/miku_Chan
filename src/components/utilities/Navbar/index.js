import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-900 shadow-lg p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Miku Chan</span>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow flex items-center space-x-4">
                    <Link href="/" className="block text-teal-200 hover:text-white transition duration-300 ease-in-out">
                        Home
                    </Link>
                    <Link href="/about" className="block text-teal-200 hover:text-white transition duration-300 ease-in-out">
                        About
                    </Link>
                    <Link href="/contact" className="block text-teal-200 hover:text-white transition duration-300 ease-in-out">
                        Contact
                    </Link>
                </div>
                <InputSearch />
            </div>
        </nav>
    );
};

export default Navbar;
