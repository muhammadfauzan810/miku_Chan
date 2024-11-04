import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center mb-6 p-5 bg-gradient-to-r from-teal-600 to-gray-900 rounded-lg shadow-md transition-transform transform hover:scale-103">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">{title}</h1>
            <Link href={linkTitle} className="bg-white text-teal-600 font-semibold text-lg rounded-lg px-4 py-2 shadow hover:bg-gray-100 transition duration-300 ease-in-out">
                {linkHref}
            </Link>
        </div>
    );
};
export default Header;
