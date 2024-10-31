const About = () => {
    return (
        <div className="flex flex-col items-center p-6 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen">
            <h1 className="text-5xl font-extrabold mb-6 text-gray-800 text-center">About Us</h1>
            <p className="text-lg text-gray-700 text-center max-w-3xl mb-8 border-b-4 border-teal-500 pb-2">
                Selamat datang di Miku Chan, platform terbaik untuk penggemar anime! Kami menyediakan berbagai informasi terkini tentang anime, termasuk rekomendasi, ulasan, dan berita terbaru. Tujuan kami adalah menjadi sumber informasi
                terpercaya dan menyenangkan bagi semua penggemar anime di seluruh dunia.
            </p>

            <div className="bg-white shadow-2xl rounded-lg p-6 mb-6 max-w-3xl transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-3xl font-semibold mb-3 text-gray-800">Visi Kami</h2>
                <p className="text-lg text-gray-700 text-center">
                    Visi kami adalah untuk menciptakan komunitas yang menyenangkan di mana para penggemar anime dapat berbagi pengetahuan dan pengalaman mereka. Kami percaya bahwa anime bukan hanya hiburan, tetapi juga sebuah seni yang
                    patut dihargai.
                </p>
            </div>

            <div className="bg-white shadow-2xl rounded-lg p-6 max-w-3xl transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-3xl font-semibold mb-3 text-gray-800">Misi Kami</h2>
                <p className="text-lg text-gray-700 text-center">
                    Misi kami adalah menyediakan informasi dan konten yang relevan untuk membantu penggemar menemukan anime yang mereka cintai. Kami berkomitmen untuk terus memperbarui database kami dengan konten terbaru dan terlengkap.
                </p>
            </div>
        </div>
    );
};

export default About;
