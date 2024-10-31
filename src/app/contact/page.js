import Link from "next/link";

const Contact = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
            <h1 className="text-5xl font-extrabold mb-4 text-gray-800 text-center">Contact Us</h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mb-8">Kami ingin mendengar dari Anda! Silakan isi formulir di bawah ini atau hubungi kami melalui informasi kontak di bawah.</p>

            <div className="bg-white shadow-2xl rounded-lg p-8 max-w-xl w-full transition-transform transform hover:scale-105 duration-300">
                <form>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Hubungi Kami</h2>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                            Nama
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-teal-500 transition duration-200 ease-in-out"
                            placeholder="Masukkan nama Anda"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-teal-500 transition duration-200 ease-in-out"
                            placeholder="Masukkan email Anda"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                            Pesan
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-teal-500 transition duration-200 ease-in-out"
                            placeholder="Tulis pesan Anda di sini"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg w-full py-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring focus:ring-teal-400"
                    >
                        Kirim Pesan
                    </button>
                </form>
            </div>

            <div className="mt-8 bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Informasi Kontak</h2>
                <p className="text-lg text-gray-700">
                    📧 Email:{" "}
                    <Link href="mailto:support@mikuchan.com" className="text-teal-500 hover:underline">
                        support@mikuchan.com
                    </Link>
                </p>
                <p className="text-lg text-gray-700">
                    📞 Telepon:{" "}
                    <Link href="tel:+62123456789" className="text-teal-500 hover:underline">
                        +62 123 456 789
                    </Link>
                </p>
                <p className="text-lg text-gray-700">🏠 Alamat: Jl. Anime No. 1, Jakarta, Indonesia</p>
            </div>
        </div>
    );
};

export default Contact;
