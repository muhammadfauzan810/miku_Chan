import Link from "next/link";

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
                <div className="mt-4 lg:mt-0 lg:ml-4 relative">
                    <input type="text" placeholder="Search..." className="bg-gray-800 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring focus:ring-teal-500" />
                    <svg className="absolute left-2 top-2.5 fill-current text-teal-200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                        <path d="M8.5 15c-3.59 0-6.5-2.91-6.5-6.5S4.91 2 8.5 2s6.5 2.91 6.5 6.5S12.09 15 8.5 15zm0-11C5.46 4 3 6.46 3 9.5S5.46 15 8.5 15 14 12.54 14 9.5 11.54 4 8.5 4zm7 11l-3.5-3.5 1.41-1.41L16 13.58 16.86 14.5z" />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
