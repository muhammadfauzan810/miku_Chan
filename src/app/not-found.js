import Link from "next/link";
import { FaRegSadCry } from "react-icons/fa"; // icon
const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center p-6 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
            {/* Ikon di atas judul */}
            <div className="text-6xl text-teal-500 mb-4">
                <FaRegSadCry /> {/* Anda bisa memilih ikon lain sesuai selera */}
            </div>

            <h1 className="font-bold text-4xl text-gray-800 relative mb-6 text-center transition-transform transform hover:scale-105">
                Halaman Tidak Ditemukan
                <span className="absolute inset-0 bg-red-200 rounded-md blur-md opacity-50" />
            </h1>

            <p className="text-lg text-gray-700 text-center max-w-3xl mb-8 border-b-4 border-teal-500 pb-2">Halaman ini tidak tersedia. Mungkin sudah dipindahkan atau dihapus.</p>

            {/* Tombol kembali ke halaman utama */}
            <Link href="/" className="bg-teal-500 text-white rounded-lg py-2 px-6 shadow-lg hover:bg-teal-600 transition duration-300">
                kembali
            </Link>
        </div>
    );
};

export default Page;
