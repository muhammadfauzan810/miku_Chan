import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-lg shadow-lg transition-transform transform ">
            <h1 className="text-4xl font-extrabold text-white drop-shadow-md">{title}</h1>
            <Link href={linkTitle} className="text-white font-semibold text-lg hover:underline transition duration-300">
                {linkHref}
            </Link>
        </div>
    );
};
export default Header;
