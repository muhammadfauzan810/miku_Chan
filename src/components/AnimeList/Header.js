import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-lg shadow">
            <h1 className="text-3xl font-extrabold text-gray-800">{title}</h1>
            {linkHref && linkTitle ? (
                <Link href="{linkTitle}" className="px-5 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    {linkHref}
                </Link>
            ) : null}
        </div>
    );
};
export default Header;
